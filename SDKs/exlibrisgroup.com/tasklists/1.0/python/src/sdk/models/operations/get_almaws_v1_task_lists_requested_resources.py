import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetAlmawsV1TaskListsRequestedResourcesQueryParams:
    circ_desk: str = dataclasses.field(metadata={'query_param': { 'field_name': 'circ_desk', 'style': 'form', 'explode': True }})
    library: str = dataclasses.field(metadata={'query_param': { 'field_name': 'library', 'style': 'form', 'explode': True }})
    direction: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'location', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order_by', 'style': 'form', 'explode': True }})
    pickup_inst: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pickup_inst', 'style': 'form', 'explode': True }})
    printed: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'printed', 'style': 'form', 'explode': True }})
    reported: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'reported', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationCopyBaseStatus:
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationCopy:
    r"""GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationCopy
    Specific copy of resource in a specific location.
    """
    
    alternative_call_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_call_number') }})
    barcode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barcode') }})
    base_status: Optional[GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationCopyBaseStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base_status') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    pid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pid') }})
    storage_location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storage_location_id') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationHoldingID:
    r"""GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationHoldingID
    Holding pid, a unique holding id that the resource is associated with.
    """
    
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationLibrary:
    r"""GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationLibrary
    Library of the requested resource. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocation:
    r"""GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocation
    Location of the requested resource.
    """
    
    call_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_number') }})
    copy: Optional[list[GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationCopy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copy') }})
    holding_id: Optional[GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationHoldingID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holding_id') }})
    library: Optional[GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocationLibrary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('library') }})
    shelving_location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shelving_location') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestDestination:
    r"""GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestDestination
    The destination will be a library in most cases. However, it may at times be: A circulation desk (when the pickup location is a reading room) A Home/Office code, where the request is for personal delivery A Work Order department
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestSubType:
    r"""GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestSubType
    The sub type of the request.
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestTypeEnum(str, Enum):
    BOOKING = "BOOKING"
    DIGITIZATION = "DIGITIZATION"
    HOLD = "HOLD"
    MOVE = "MOVE"
    WORK_ORDER = "WORK_ORDER"


@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequester:
    r"""GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequester
    A description of the requester.
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequest:
    r"""GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequest
    Request object.
    """
    
    request_type: GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_type') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    destination: Optional[GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    printed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printed') }})
    reported: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reported') }})
    request_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    request_sub_type: Optional[GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequestSubType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_sub_type') }})
    request_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    requester: Optional[GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequestRequester] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requester') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceResourceMetadataMmsID:
    r"""GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceResourceMetadataMmsID
    The MMS id of the resource. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).
    """
    
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceResourceMetadata:
    r"""GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceResourceMetadata
    Metadata about the requested resource.
    """
    
    author: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    isbn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isbn') }})
    issn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issn') }})
    mms_id: Optional[GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceResourceMetadataMmsID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mms_id') }})
    publication_place: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publication_place') }})
    publication_year: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publication_year') }})
    publisher: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResource:
    r"""GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResource
    Requested resource to be picked from the shelf.
    """
    
    location: Optional[GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    request: Optional[list[GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request') }})
    resource_metadata: Optional[GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResourceResourceMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_metadata') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAlmawsV1TaskListsRequestedResources200ApplicationJSON:
    r"""GetAlmawsV1TaskListsRequestedResources200ApplicationJSON
    A list of requested resources.
    """
    
    requested_resource: Optional[list[GetAlmawsV1TaskListsRequestedResources200ApplicationJSONRequestedResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requested_resource') }})
    total_record_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_record_count') }})
    

@dataclasses.dataclass
class GetAlmawsV1TaskListsRequestedResourcesRequest:
    query_params: GetAlmawsV1TaskListsRequestedResourcesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAlmawsV1TaskListsRequestedResourcesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_almaws_v1_task_lists_requested_resources_200_application_json_object: Optional[GetAlmawsV1TaskListsRequestedResources200ApplicationJSON] = dataclasses.field(default=None)
    

import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopyBaseStatus:
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopy:
    r"""Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopy
    Specific copy of resource in a specific location.
    """
    
    alternative_call_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_call_number') }})
    barcode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barcode') }})
    base_status: Optional[Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopyBaseStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base_status') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    pid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pid') }})
    storage_location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storage_location_id') }})
    

@dataclass_json
@dataclasses.dataclass
class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationHoldingID:
    r"""Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationHoldingID
    Holding pid, a unique holding id that the resource is associated with.
    """
    
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationLibrary:
    r"""Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationLibrary
    Library of the requested resource. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocation:
    r"""Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocation
    Location of the requested resource.
    """
    
    call_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_number') }})
    copy: Optional[list[Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationCopy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copy') }})
    holding_id: Optional[Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationHoldingID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holding_id') }})
    library: Optional[Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocationLibrary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('library') }})
    shelving_location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shelving_location') }})
    

@dataclass_json
@dataclasses.dataclass
class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestDestination:
    r"""Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestDestination
    The destination will be a library in most cases. However, it may at times be: A circulation desk (when the pickup location is a reading room) A Home/Office code, where the request is for personal delivery A Work Order department
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestSubType:
    r"""Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestSubType
    The sub type of the request.
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestTypeEnum(str, Enum):
    BOOKING = "BOOKING"
    DIGITIZATION = "DIGITIZATION"
    HOLD = "HOLD"
    MOVE = "MOVE"
    WORK_ORDER = "WORK_ORDER"


@dataclass_json
@dataclasses.dataclass
class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequester:
    r"""Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequester
    A description of the requester.
    """
    
    desc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest:
    r"""Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest
    Request object.
    """
    
    request_type: Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_type') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    destination: Optional[Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    printed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('printed') }})
    reported: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reported') }})
    request_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    request_sub_type: Optional[Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequestSubType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_sub_type') }})
    request_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    requester: Optional[Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequestRequester] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requester') }})
    

@dataclass_json
@dataclasses.dataclass
class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadataMmsID:
    r"""Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadataMmsID
    The MMS id of the resource. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).
    """
    
    link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata:
    r"""Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata
    Metadata about the requested resource.
    """
    
    author: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    isbn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isbn') }})
    issn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issn') }})
    mms_id: Optional[Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadataMmsID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mms_id') }})
    publication_place: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publication_place') }})
    publication_year: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publication_year') }})
    publisher: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResource:
    r"""Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResource
    Requested resource to be picked from the shelf.
    """
    
    location: Optional[Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    request: Optional[list[Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request') }})
    resource_metadata: Optional[Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_metadata') }})
    

@dataclass_json
@dataclasses.dataclass
class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema:
    r"""Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema
    A list of requested resources.
    """
    
    requested_resource: Optional[list[Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requested_resource') }})
    total_record_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_record_count') }})
    

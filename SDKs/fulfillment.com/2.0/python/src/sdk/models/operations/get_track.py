import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onetrack_get_responses_200_content_application_1json_schema_properties_origin_properties_geometry as shared_onetrack_get_responses_200_content_application_1json_schema_properties_origin_properties_geometry
from ..shared import onetrack_get_responses_200_content_application_1json_schema_properties_origin as shared_onetrack_get_responses_200_content_application_1json_schema_properties_origin


@dataclasses.dataclass
class GetTrackQueryParams:
    tracking_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'trackingNumber', 'style': 'form', 'explode': True }})
    
class GetTrackTrackingResponseFeatureGeometryTypeEnum(str, Enum):
    POINT = "Point"
    LINE_STRING = "LineString"
    POLYGON = "Polygon"
    MULTI_POINT = "MultiPoint"
    MULTI_LINE_STRING = "MultiLineString"
    MULTI_POLYGON = "MultiPolygon"


@dataclass_json
@dataclasses.dataclass
class GetTrackTrackingResponseFeatureGeometry:
    r"""GetTrackTrackingResponseFeatureGeometry
    GeoJSon geometry
    http://geojson.org/geojson-spec.html#geometry-objects
    """
    
    coordinates: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinates') }})
    type: GetTrackTrackingResponseFeatureGeometryTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackTrackingResponseFeatureProperties:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class GetTrackTrackingResponseFeatureTypeEnum(str, Enum):
    FEATURE = "Feature"


@dataclass_json
@dataclasses.dataclass
class GetTrackTrackingResponseFeature:
    r"""GetTrackTrackingResponseFeature
    GeoJSon Feature
    https://tools.ietf.org/html/rfc7946#section-3.2
    """
    
    geometry: GetTrackTrackingResponseFeatureGeometry = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('geometry') }})
    properties: GetTrackTrackingResponseFeatureProperties = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    type: GetTrackTrackingResponseFeatureTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    bbox: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bbox') }})
    centerline: Optional[shared_onetrack_get_responses_200_content_application_1json_schema_properties_origin_properties_geometry.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('centerline') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class GetTrackTrackingResponseTrackingEventV2EventSourceEnum(str, Enum):
    CARRIER = "carrier"
    INTERNAL = "internal"


@dataclass_json
@dataclasses.dataclass
class GetTrackTrackingResponseTrackingEventV2:
    event_category: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventCategory') }})
    event_category_code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventCategoryCode') }})
    event_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_location: Optional[shared_onetrack_get_responses_200_content_application_1json_schema_properties_origin.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventLocation') }})
    event_source: Optional[GetTrackTrackingResponseTrackingEventV2EventSourceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventSource') }})
    event_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventStatus') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackTrackingResponseTrackingNumberV2:
    barcode_scan_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barcodeScanValue') }})
    carrier: Optional[GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTrackTrackingResponse:
    destination: Optional[shared_onetrack_get_responses_200_content_application_1json_schema_properties_origin.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    fdc_order_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fdcOrderId') }})
    first_checked_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstCheckedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_transit_event: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstTransitEvent'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_checked_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastCheckedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    origin: Optional[GetTrackTrackingResponseFeature] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_category_code: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCategoryCode') }})
    status_date_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    tracked_events: Optional[list[GetTrackTrackingResponseTrackingEventV2]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackedEvents') }})
    tracking_number: Optional[GetTrackTrackingResponseTrackingNumberV2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingNumber') }})
    

@dataclasses.dataclass
class GetTrackRequest:
    query_params: GetTrackQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTrackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tracking_response: Optional[GetTrackTrackingResponse] = dataclasses.field(default=None)
    

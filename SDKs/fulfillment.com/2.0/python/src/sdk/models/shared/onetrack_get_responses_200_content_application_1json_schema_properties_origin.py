import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onetrack_get_responses_200_content_application_1json_schema_properties_origin_properties_geometry as shared_onetrack_get_responses_200_content_application_1json_schema_properties_origin_properties_geometry

class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum(str, Enum):
    POINT = "Point"
    LINE_STRING = "LineString"
    POLYGON = "Polygon"
    MULTI_POINT = "MultiPoint"
    MULTI_LINE_STRING = "MultiLineString"
    MULTI_POLYGON = "MultiPolygon"


@dataclass_json
@dataclasses.dataclass
class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry:
    r"""OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry
    GeoJSon geometry
    http://geojson.org/geojson-spec.html#geometry-objects
    """
    
    coordinates: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinates') }})
    type: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometryTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginProperties:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginTypeEnum(str, Enum):
    FEATURE = "Feature"


@dataclass_json
@dataclasses.dataclass
class OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin:
    r"""OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin
    GeoJSon Feature
    https://tools.ietf.org/html/rfc7946#section-3.2
    """
    
    geometry: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginGeometry = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('geometry') }})
    properties: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginProperties = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    type: OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    bbox: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bbox') }})
    centerline: Optional[shared_onetrack_get_responses_200_content_application_1json_schema_properties_origin_properties_geometry.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('centerline') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

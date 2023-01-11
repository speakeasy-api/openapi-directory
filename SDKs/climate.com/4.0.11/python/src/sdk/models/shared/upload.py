import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UploadContentTypeEnum(str, Enum):
    APPLICATION_VND_CLIMATE_FIELD_GEOJSON = "application/vnd.climate.field.geojson"
    IMAGE_VND_CLIMATE_THERMAL_GEOTIFF = "image/vnd.climate.thermal.geotiff"
    IMAGE_VND_CLIMATE_NDVI_GEOTIFF = "image/vnd.climate.ndvi.geotiff"
    IMAGE_VND_CLIMATE_WATERSTRESS_GEOTIFF = "image/vnd.climate.waterstress.geotiff"
    IMAGE_VND_CLIMATE_ELEVATION_GEOTIFF = "image/vnd.climate.elevation.geotiff"
    IMAGE_VND_CLIMATE_RAW_GEOTIFF = "image/vnd.climate.raw.geotiff"
    IMAGE_VND_CLIMATE_RGB_GEOTIFF = "image/vnd.climate.rgb.geotiff"


@dataclass_json
@dataclasses.dataclass
class Upload:
    r"""Upload
    Client request to upload data for a user.
    """
    
    content_type: UploadContentTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    length: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    md5: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('md5') }})
    metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    

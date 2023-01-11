import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ExportImageResultS3ExportLocation:
    r"""ExportImageResultS3ExportLocation
    Information about the destination Amazon S3 bucket.
    """
    
    s3_bucket: Optional[dict[str, Any]] = dataclasses.field(default=None)
    s3_prefix: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ExportImageResult:
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    disk_image_format: Optional[dict[str, Any]] = dataclasses.field(default=None)
    export_image_task_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    image_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    progress: Optional[dict[str, Any]] = dataclasses.field(default=None)
    role_name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    s3_export_location: Optional[ExportImageResultS3ExportLocation] = dataclasses.field(default=None)
    status: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status_message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ImportImageResult:
    architecture: Optional[dict[str, Any]] = dataclasses.field(default=None)
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    encrypted: Optional[dict[str, Any]] = dataclasses.field(default=None)
    hypervisor: Optional[dict[str, Any]] = dataclasses.field(default=None)
    image_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    import_task_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    kms_key_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    license_specifications: Optional[dict[str, Any]] = dataclasses.field(default=None)
    license_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    platform: Optional[dict[str, Any]] = dataclasses.field(default=None)
    progress: Optional[dict[str, Any]] = dataclasses.field(default=None)
    snapshot_details: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status_message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    usage_operation: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

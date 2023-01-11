import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ImportVolumeResultConversionTaskImportInstance:
    r"""ImportVolumeResultConversionTaskImportInstance
    If the task is for importing an instance, this contains information about the import instance task.
    """
    
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    platform: Optional[dict[str, Any]] = dataclasses.field(default=None)
    volumes: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ImportVolumeResultConversionTaskImportVolumeImage:
    r"""ImportVolumeResultConversionTaskImportVolumeImage
    The image.
    """
    
    checksum: Optional[dict[str, Any]] = dataclasses.field(default=None)
    format: Optional[dict[str, Any]] = dataclasses.field(default=None)
    import_manifest_url: Optional[dict[str, Any]] = dataclasses.field(default=None)
    size: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ImportVolumeResultConversionTaskImportVolumeVolume:
    r"""ImportVolumeResultConversionTaskImportVolumeVolume
    The volume.
    """
    
    id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    size: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ImportVolumeResultConversionTaskImportVolume:
    r"""ImportVolumeResultConversionTaskImportVolume
    If the task is for importing a volume, this contains information about the import volume task.
    """
    
    availability_zone: Optional[dict[str, Any]] = dataclasses.field(default=None)
    bytes_converted: Optional[dict[str, Any]] = dataclasses.field(default=None)
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    image: Optional[ImportVolumeResultConversionTaskImportVolumeImage] = dataclasses.field(default=None)
    volume: Optional[ImportVolumeResultConversionTaskImportVolumeVolume] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ImportVolumeResultConversionTask:
    r"""ImportVolumeResultConversionTask
    Information about the conversion task.
    """
    
    conversion_task_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    expiration_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    import_instance: Optional[ImportVolumeResultConversionTaskImportInstance] = dataclasses.field(default=None)
    import_volume: Optional[ImportVolumeResultConversionTaskImportVolume] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status_message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ImportVolumeResult:
    conversion_task: Optional[ImportVolumeResultConversionTask] = dataclasses.field(default=None)
    

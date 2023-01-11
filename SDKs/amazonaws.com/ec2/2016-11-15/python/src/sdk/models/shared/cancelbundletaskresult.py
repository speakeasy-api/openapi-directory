import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import s3storage as shared_s3storage


@dataclasses.dataclass
class CancelBundleTaskResultBundleTaskBundleTaskError:
    r"""CancelBundleTaskResultBundleTaskBundleTaskError
    If the task fails, a description of the error.
    """
    
    code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CancelBundleTaskResultBundleTaskStorage:
    r"""CancelBundleTaskResultBundleTaskStorage
    The Amazon S3 storage locations.
    """
    
    s3: Optional[shared_s3storage.S3Storage] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CancelBundleTaskResultBundleTask:
    r"""CancelBundleTaskResultBundleTask
    Information about the bundle task.
    """
    
    bundle_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    bundle_task_error: Optional[CancelBundleTaskResultBundleTaskBundleTaskError] = dataclasses.field(default=None)
    instance_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    progress: Optional[dict[str, Any]] = dataclasses.field(default=None)
    start_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    storage: Optional[CancelBundleTaskResultBundleTaskStorage] = dataclasses.field(default=None)
    update_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CancelBundleTaskResult:
    r"""CancelBundleTaskResult
    Contains the output of CancelBundleTask.
    """
    
    bundle_task: Optional[CancelBundleTaskResultBundleTask] = dataclasses.field(default=None)
    

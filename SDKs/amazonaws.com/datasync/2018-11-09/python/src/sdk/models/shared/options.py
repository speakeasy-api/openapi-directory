import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import atime_enum as shared_atime_enum
from ..shared import gid_enum as shared_gid_enum
from ..shared import loglevel_enum as shared_loglevel_enum
from ..shared import mtime_enum as shared_mtime_enum
from ..shared import overwritemode_enum as shared_overwritemode_enum
from ..shared import posixpermissions_enum as shared_posixpermissions_enum
from ..shared import preservedeletedfiles_enum as shared_preservedeletedfiles_enum
from ..shared import preservedevices_enum as shared_preservedevices_enum
from ..shared import smbsecuritydescriptorcopyflags_enum as shared_smbsecuritydescriptorcopyflags_enum
from ..shared import taskqueueing_enum as shared_taskqueueing_enum
from ..shared import transfermode_enum as shared_transfermode_enum
from ..shared import uid_enum as shared_uid_enum
from ..shared import verifymode_enum as shared_verifymode_enum


@dataclass_json
@dataclasses.dataclass
class Options:
    r"""Options
    <p>Represents the options that are available to control the behavior of a <a href=\"https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html\">StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a href=\"https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html\">StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a href=\"https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html\">StartTaskExecution</a>.</p>
    """
    
    atime: Optional[shared_atime_enum.AtimeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Atime') }})
    bytes_per_second: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BytesPerSecond') }})
    gid: Optional[shared_gid_enum.GidEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Gid') }})
    log_level: Optional[shared_loglevel_enum.LogLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogLevel') }})
    mtime: Optional[shared_mtime_enum.MtimeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mtime') }})
    overwrite_mode: Optional[shared_overwritemode_enum.OverwriteModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OverwriteMode') }})
    posix_permissions: Optional[shared_posixpermissions_enum.PosixPermissionsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PosixPermissions') }})
    preserve_deleted_files: Optional[shared_preservedeletedfiles_enum.PreserveDeletedFilesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreserveDeletedFiles') }})
    preserve_devices: Optional[shared_preservedevices_enum.PreserveDevicesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreserveDevices') }})
    security_descriptor_copy_flags: Optional[shared_smbsecuritydescriptorcopyflags_enum.SmbSecurityDescriptorCopyFlagsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityDescriptorCopyFlags') }})
    task_queueing: Optional[shared_taskqueueing_enum.TaskQueueingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskQueueing') }})
    transfer_mode: Optional[shared_transfermode_enum.TransferModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransferMode') }})
    uid: Optional[shared_uid_enum.UIDEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Uid') }})
    verify_mode: Optional[shared_verifymode_enum.VerifyModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VerifyMode') }})
    

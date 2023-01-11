import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import backuppolicy_enum as shared_backuppolicy_enum
from ..shared import backupretentionpolicy as shared_backupretentionpolicy
from ..shared import certificates as shared_certificates
from ..shared import hsm as shared_hsm
from ..shared import clusterstate_enum as shared_clusterstate_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class Cluster:
    r"""Cluster
    Contains information about an AWS CloudHSM cluster.
    """
    
    backup_policy: Optional[shared_backuppolicy_enum.BackupPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupPolicy') }})
    backup_retention_policy: Optional[shared_backupretentionpolicy.BackupRetentionPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackupRetentionPolicy') }})
    certificates: Optional[shared_certificates.Certificates] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Certificates') }})
    cluster_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    create_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hsm_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmType') }})
    hsms: Optional[list[shared_hsm.Hsm]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hsms') }})
    pre_co_password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreCoPassword') }})
    security_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroup') }})
    source_backup_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceBackupId') }})
    state: Optional[shared_clusterstate_enum.ClusterStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    state_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateMessage') }})
    subnet_mapping: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetMapping') }})
    tag_list: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagList') }})
    vpc_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    

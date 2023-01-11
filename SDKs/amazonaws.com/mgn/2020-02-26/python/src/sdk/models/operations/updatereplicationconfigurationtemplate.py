import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import replicationconfigurationtemplate as shared_replicationconfigurationtemplate


@dataclasses.dataclass
class UpdateReplicationConfigurationTemplateHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum(str, Enum):
    PRIVATE_IP = "PRIVATE_IP"
    PUBLIC_IP = "PUBLIC_IP"

class UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum(str, Enum):
    GP2 = "GP2"
    ST1 = "ST1"

class UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum(str, Enum):
    DEFAULT = "DEFAULT"
    CUSTOM = "CUSTOM"


@dataclass_json
@dataclasses.dataclass
class UpdateReplicationConfigurationTemplateRequestBody:
    replication_configuration_template_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationConfigurationTemplateID') }})
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    associate_default_security_group: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associateDefaultSecurityGroup') }})
    bandwidth_throttling: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthThrottling') }})
    create_public_ip: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createPublicIP') }})
    data_plane_routing: Optional[UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataPlaneRouting') }})
    default_large_staging_disk_type: Optional[UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLargeStagingDiskType') }})
    ebs_encryption: Optional[UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebsEncryption') }})
    ebs_encryption_key_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebsEncryptionKeyArn') }})
    replication_server_instance_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationServerInstanceType') }})
    replication_servers_security_groups_i_ds: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicationServersSecurityGroupsIDs') }})
    staging_area_subnet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stagingAreaSubnetId') }})
    staging_area_tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stagingAreaTags') }})
    use_dedicated_replication_server: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useDedicatedReplicationServer') }})
    

@dataclasses.dataclass
class UpdateReplicationConfigurationTemplateRequest:
    headers: UpdateReplicationConfigurationTemplateHeaders = dataclasses.field()
    request: UpdateReplicationConfigurationTemplateRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateReplicationConfigurationTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    replication_configuration_template: Optional[shared_replicationconfigurationtemplate.ReplicationConfigurationTemplate] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    uninitialized_account_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    

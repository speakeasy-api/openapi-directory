import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobtype_enum as shared_jobtype_enum
from ..shared import notification as shared_notification
from ..shared import ondeviceserviceconfiguration as shared_ondeviceserviceconfiguration
from ..shared import remotemanagement_enum as shared_remotemanagement_enum
from ..shared import jobresource as shared_jobresource
from ..shared import shippingoption_enum as shared_shippingoption_enum
from ..shared import snowballtype_enum as shared_snowballtype_enum
from ..shared import taxdocuments as shared_taxdocuments


@dataclass_json
@dataclasses.dataclass
class CreateClusterRequest:
    address_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressId') }})
    job_type: shared_jobtype_enum.JobTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobType') }})
    resources: shared_jobresource.JobResource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    shipping_option: shared_shippingoption_enum.ShippingOptionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingOption') }})
    snowball_type: shared_snowballtype_enum.SnowballTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnowballType') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    forwarding_address_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForwardingAddressId') }})
    kms_key_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyARN') }})
    notification: Optional[shared_notification.Notification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notification') }})
    on_device_service_configuration: Optional[shared_ondeviceserviceconfiguration.OnDeviceServiceConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnDeviceServiceConfiguration') }})
    remote_management: Optional[shared_remotemanagement_enum.RemoteManagementEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoteManagement') }})
    tax_documents: Optional[shared_taxdocuments.TaxDocuments] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxDocuments') }})
    

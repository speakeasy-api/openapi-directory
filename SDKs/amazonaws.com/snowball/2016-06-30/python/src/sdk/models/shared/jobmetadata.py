import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datatransfer as shared_datatransfer
from ..shared import deviceconfiguration as shared_deviceconfiguration
from ..shared import joblogs as shared_joblogs
from ..shared import jobstate_enum as shared_jobstate_enum
from ..shared import jobtype_enum as shared_jobtype_enum
from ..shared import notification as shared_notification
from ..shared import ondeviceserviceconfiguration as shared_ondeviceserviceconfiguration
from ..shared import remotemanagement_enum as shared_remotemanagement_enum
from ..shared import jobresource as shared_jobresource
from ..shared import shippingdetails as shared_shippingdetails
from ..shared import snowballcapacity_enum as shared_snowballcapacity_enum
from ..shared import snowballtype_enum as shared_snowballtype_enum
from ..shared import taxdocuments as shared_taxdocuments


@dataclass_json
@dataclasses.dataclass
class JobMetadata:
    r"""JobMetadata
    Contains information about a specific job including shipping information, job status, and other important metadata. This information is returned as a part of the response syntax of the <code>DescribeJob</code> action.
    """
    
    address_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressId') }})
    cluster_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    creation_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_transfer_progress: Optional[shared_datatransfer.DataTransfer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataTransferProgress') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    device_configuration: Optional[shared_deviceconfiguration.DeviceConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceConfiguration') }})
    forwarding_address_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForwardingAddressId') }})
    job_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    job_log_info: Optional[shared_joblogs.JobLogs] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobLogInfo') }})
    job_state: Optional[shared_jobstate_enum.JobStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobState') }})
    job_type: Optional[shared_jobtype_enum.JobTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobType') }})
    kms_key_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyARN') }})
    long_term_pricing_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LongTermPricingId') }})
    notification: Optional[shared_notification.Notification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notification') }})
    on_device_service_configuration: Optional[shared_ondeviceserviceconfiguration.OnDeviceServiceConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnDeviceServiceConfiguration') }})
    remote_management: Optional[shared_remotemanagement_enum.RemoteManagementEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoteManagement') }})
    resources: Optional[shared_jobresource.JobResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    shipping_details: Optional[shared_shippingdetails.ShippingDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingDetails') }})
    snowball_capacity_preference: Optional[shared_snowballcapacity_enum.SnowballCapacityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnowballCapacityPreference') }})
    snowball_type: Optional[shared_snowballtype_enum.SnowballTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnowballType') }})
    tax_documents: Optional[shared_taxdocuments.TaxDocuments] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxDocuments') }})
    

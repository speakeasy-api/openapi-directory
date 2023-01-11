import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clusterstate_enum as shared_clusterstate_enum
from ..shared import jobtype_enum as shared_jobtype_enum
from ..shared import notification as shared_notification
from ..shared import ondeviceserviceconfiguration as shared_ondeviceserviceconfiguration
from ..shared import jobresource as shared_jobresource
from ..shared import shippingoption_enum as shared_shippingoption_enum
from ..shared import snowballtype_enum as shared_snowballtype_enum
from ..shared import taxdocuments as shared_taxdocuments


@dataclass_json
@dataclasses.dataclass
class ClusterMetadata:
    r"""ClusterMetadata
    Contains metadata about a specific cluster.
    """
    
    address_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressId') }})
    cluster_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    cluster_state: Optional[shared_clusterstate_enum.ClusterStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterState') }})
    creation_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    forwarding_address_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForwardingAddressId') }})
    job_type: Optional[shared_jobtype_enum.JobTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobType') }})
    kms_key_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyARN') }})
    notification: Optional[shared_notification.Notification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notification') }})
    on_device_service_configuration: Optional[shared_ondeviceserviceconfiguration.OnDeviceServiceConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnDeviceServiceConfiguration') }})
    resources: Optional[shared_jobresource.JobResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    shipping_option: Optional[shared_shippingoption_enum.ShippingOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingOption') }})
    snowball_type: Optional[shared_snowballtype_enum.SnowballTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnowballType') }})
    tax_documents: Optional[shared_taxdocuments.TaxDocuments] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxDocuments') }})
    

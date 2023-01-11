import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import blockdevicemapping as shared_blockdevicemapping
from ..shared import instancemonitoring as shared_instancemonitoring
from ..shared import instancemetadataoptions as shared_instancemetadataoptions


@dataclasses.dataclass
class LaunchConfiguration:
    r"""LaunchConfiguration
    Describes a launch configuration.
    """
    
    created_time: datetime = dataclasses.field()
    image_id: str = dataclasses.field()
    instance_type: str = dataclasses.field()
    launch_configuration_name: str = dataclasses.field()
    associate_public_ip_address: Optional[bool] = dataclasses.field(default=None)
    block_device_mappings: Optional[list[shared_blockdevicemapping.BlockDeviceMapping]] = dataclasses.field(default=None)
    classic_link_vpc_id: Optional[str] = dataclasses.field(default=None)
    classic_link_vpc_security_groups: Optional[list[str]] = dataclasses.field(default=None)
    ebs_optimized: Optional[bool] = dataclasses.field(default=None)
    iam_instance_profile: Optional[str] = dataclasses.field(default=None)
    instance_monitoring: Optional[shared_instancemonitoring.InstanceMonitoring] = dataclasses.field(default=None)
    kernel_id: Optional[str] = dataclasses.field(default=None)
    key_name: Optional[str] = dataclasses.field(default=None)
    launch_configuration_arn: Optional[str] = dataclasses.field(default=None)
    metadata_options: Optional[shared_instancemetadataoptions.InstanceMetadataOptions] = dataclasses.field(default=None)
    placement_tenancy: Optional[str] = dataclasses.field(default=None)
    ramdisk_id: Optional[str] = dataclasses.field(default=None)
    security_groups: Optional[list[str]] = dataclasses.field(default=None)
    spot_price: Optional[str] = dataclasses.field(default=None)
    user_data: Optional[str] = dataclasses.field(default=None)
    

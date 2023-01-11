import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget:
    r"""CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget
    Information about the target Capacity Reservation or Capacity Reservation group.
    """
    
    capacity_reservation_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    capacity_reservation_resource_group_arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification:
    r"""CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification
    Information about the Capacity Reservation targeting option.
    """
    
    capacity_reservation_preference: Optional[dict[str, Any]] = dataclasses.field(default=None)
    capacity_reservation_target: Optional[CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCPUOptions:
    r"""CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCPUOptions
    The CPU options for the instance. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html\">Optimizing CPU options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
    """
    
    core_count: Optional[dict[str, Any]] = dataclasses.field(default=None)
    threads_per_core: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCreditSpecification:
    r"""CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCreditSpecification
    The credit option for CPU usage of the instance.
    """
    
    cpu_credits: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataEnclaveOptions:
    r"""CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataEnclaveOptions
    Indicates whether the instance is enabled for Amazon Web Services Nitro Enclaves.
    """
    
    enabled: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions:
    r"""CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions
    Indicates whether an instance is configured for hibernation. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html\">Hibernate your instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
    """
    
    configured: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataIamInstanceProfile:
    r"""CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataIamInstanceProfile
    The IAM instance profile.
    """
    
    arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions:
    r"""CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions
    The options for Spot Instances.
    """
    
    block_duration_minutes: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_interruption_behavior: Optional[dict[str, Any]] = dataclasses.field(default=None)
    max_price: Optional[dict[str, Any]] = dataclasses.field(default=None)
    spot_instance_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    valid_until: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions:
    r"""CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions
    The market (purchasing) option for the instances.
    """
    
    market_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    spot_options: Optional[CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptionsSpotOptions] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions:
    r"""CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions
    The metadata options for the instance. For more information, see <a href=\"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html\">Instance metadata and user data</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
    """
    
    http_endpoint: Optional[dict[str, Any]] = dataclasses.field(default=None)
    http_protocol_ipv6: Optional[dict[str, Any]] = dataclasses.field(default=None)
    http_put_response_hop_limit: Optional[dict[str, Any]] = dataclasses.field(default=None)
    http_tokens: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMonitoring:
    r"""CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMonitoring
    The monitoring for the instance.
    """
    
    enabled: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement:
    r"""CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement
    The placement of the instance.
    """
    
    affinity: Optional[dict[str, Any]] = dataclasses.field(default=None)
    availability_zone: Optional[dict[str, Any]] = dataclasses.field(default=None)
    group_name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    host_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    host_resource_group_arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    partition_number: Optional[dict[str, Any]] = dataclasses.field(default=None)
    spread_domain: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tenancy: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData:
    r"""CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData
    Information about the launch template.
    """
    
    block_device_mappings: Optional[dict[str, Any]] = dataclasses.field(default=None)
    capacity_reservation_specification: Optional[CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCapacityReservationSpecification] = dataclasses.field(default=None)
    cpu_options: Optional[CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCPUOptions] = dataclasses.field(default=None)
    credit_specification: Optional[CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCreditSpecification] = dataclasses.field(default=None)
    disable_api_termination: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ebs_optimized: Optional[dict[str, Any]] = dataclasses.field(default=None)
    elastic_gpu_specifications: Optional[dict[str, Any]] = dataclasses.field(default=None)
    elastic_inference_accelerators: Optional[dict[str, Any]] = dataclasses.field(default=None)
    enclave_options: Optional[CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataEnclaveOptions] = dataclasses.field(default=None)
    hibernation_options: Optional[CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions] = dataclasses.field(default=None)
    iam_instance_profile: Optional[CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataIamInstanceProfile] = dataclasses.field(default=None)
    image_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_initiated_shutdown_behavior: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_market_options: Optional[CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataInstanceMarketOptions] = dataclasses.field(default=None)
    instance_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    kernel_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    key_name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    license_specifications: Optional[dict[str, Any]] = dataclasses.field(default=None)
    metadata_options: Optional[CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMetadataOptions] = dataclasses.field(default=None)
    monitoring: Optional[CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataMonitoring] = dataclasses.field(default=None)
    network_interfaces: Optional[dict[str, Any]] = dataclasses.field(default=None)
    placement: Optional[CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataPlacement] = dataclasses.field(default=None)
    ram_disk_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    security_group_ids: Optional[dict[str, Any]] = dataclasses.field(default=None)
    security_groups: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tag_specifications: Optional[dict[str, Any]] = dataclasses.field(default=None)
    user_data: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateLaunchTemplateVersionResultLaunchTemplateVersion:
    r"""CreateLaunchTemplateVersionResultLaunchTemplateVersion
    Information about the launch template version.
    """
    
    create_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    created_by: Optional[dict[str, Any]] = dataclasses.field(default=None)
    default_version: Optional[dict[str, Any]] = dataclasses.field(default=None)
    launch_template_data: Optional[CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData] = dataclasses.field(default=None)
    launch_template_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    launch_template_name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    version_description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    version_number: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateLaunchTemplateVersionResultWarning:
    r"""CreateLaunchTemplateVersionResultWarning
    If the new version of the launch template contains parameters or parameter combinations that are not valid, an error code and an error message are returned for each issue that's found.
    """
    
    errors: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateLaunchTemplateVersionResult:
    launch_template_version: Optional[CreateLaunchTemplateVersionResultLaunchTemplateVersion] = dataclasses.field(default=None)
    warning: Optional[CreateLaunchTemplateVersionResultWarning] = dataclasses.field(default=None)
    

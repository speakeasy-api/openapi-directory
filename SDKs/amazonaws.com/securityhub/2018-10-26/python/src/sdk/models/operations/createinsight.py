import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stringfilter as shared_stringfilter
from ..shared import numberfilter as shared_numberfilter
from ..shared import datefilter as shared_datefilter
from ..shared import ipfilter as shared_ipfilter
from ..shared import mapfilter as shared_mapfilter
from ..shared import createinsightresponse as shared_createinsightresponse


@dataclasses.dataclass
class CreateInsightHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateInsightRequestBodyFilters:
    r"""CreateInsightRequestBodyFilters
    <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p>
    """
    
    aws_account_id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsAccountId') }})
    company_name: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompanyName') }})
    compliance_status: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceStatus') }})
    confidence: Optional[list[shared_numberfilter.NumberFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    created_at: Optional[list[shared_datefilter.DateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt') }})
    criticality: Optional[list[shared_numberfilter.NumberFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Criticality') }})
    description: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    finding_provider_fields_confidence: Optional[list[shared_numberfilter.NumberFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindingProviderFieldsConfidence') }})
    finding_provider_fields_criticality: Optional[list[shared_numberfilter.NumberFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindingProviderFieldsCriticality') }})
    finding_provider_fields_related_findings_id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindingProviderFieldsRelatedFindingsId') }})
    finding_provider_fields_related_findings_product_arn: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindingProviderFieldsRelatedFindingsProductArn') }})
    finding_provider_fields_severity_label: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindingProviderFieldsSeverityLabel') }})
    finding_provider_fields_severity_original: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindingProviderFieldsSeverityOriginal') }})
    finding_provider_fields_types: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindingProviderFieldsTypes') }})
    first_observed_at: Optional[list[shared_datefilter.DateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstObservedAt') }})
    generator_id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeneratorId') }})
    id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    keyword: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keyword') }})
    last_observed_at: Optional[list[shared_datefilter.DateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastObservedAt') }})
    malware_name: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MalwareName') }})
    malware_path: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MalwarePath') }})
    malware_state: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MalwareState') }})
    malware_type: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MalwareType') }})
    network_destination_domain: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkDestinationDomain') }})
    network_destination_ip_v4: Optional[list[shared_ipfilter.IPFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkDestinationIpV4') }})
    network_destination_ip_v6: Optional[list[shared_ipfilter.IPFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkDestinationIpV6') }})
    network_destination_port: Optional[list[shared_numberfilter.NumberFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkDestinationPort') }})
    network_direction: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkDirection') }})
    network_protocol: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkProtocol') }})
    network_source_domain: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkSourceDomain') }})
    network_source_ip_v4: Optional[list[shared_ipfilter.IPFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkSourceIpV4') }})
    network_source_ip_v6: Optional[list[shared_ipfilter.IPFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkSourceIpV6') }})
    network_source_mac: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkSourceMac') }})
    network_source_port: Optional[list[shared_numberfilter.NumberFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkSourcePort') }})
    note_text: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoteText') }})
    note_updated_at: Optional[list[shared_datefilter.DateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoteUpdatedAt') }})
    note_updated_by: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoteUpdatedBy') }})
    process_launched_at: Optional[list[shared_datefilter.DateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessLaunchedAt') }})
    process_name: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessName') }})
    process_parent_pid: Optional[list[shared_numberfilter.NumberFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessParentPid') }})
    process_path: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessPath') }})
    process_pid: Optional[list[shared_numberfilter.NumberFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessPid') }})
    process_terminated_at: Optional[list[shared_datefilter.DateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessTerminatedAt') }})
    product_arn: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductArn') }})
    product_fields: Optional[list[shared_mapfilter.MapFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductFields') }})
    product_name: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductName') }})
    recommendation_text: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecommendationText') }})
    record_state: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordState') }})
    region: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Region') }})
    related_findings_id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelatedFindingsId') }})
    related_findings_product_arn: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelatedFindingsProductArn') }})
    resource_aws_ec2_instance_iam_instance_profile_arn: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsEc2InstanceIamInstanceProfileArn') }})
    resource_aws_ec2_instance_image_id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsEc2InstanceImageId') }})
    resource_aws_ec2_instance_ip_v4_addresses: Optional[list[shared_ipfilter.IPFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsEc2InstanceIpV4Addresses') }})
    resource_aws_ec2_instance_ip_v6_addresses: Optional[list[shared_ipfilter.IPFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsEc2InstanceIpV6Addresses') }})
    resource_aws_ec2_instance_key_name: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsEc2InstanceKeyName') }})
    resource_aws_ec2_instance_launched_at: Optional[list[shared_datefilter.DateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsEc2InstanceLaunchedAt') }})
    resource_aws_ec2_instance_subnet_id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsEc2InstanceSubnetId') }})
    resource_aws_ec2_instance_type: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsEc2InstanceType') }})
    resource_aws_ec2_instance_vpc_id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsEc2InstanceVpcId') }})
    resource_aws_iam_access_key_created_at: Optional[list[shared_datefilter.DateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsIamAccessKeyCreatedAt') }})
    resource_aws_iam_access_key_principal_name: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsIamAccessKeyPrincipalName') }})
    resource_aws_iam_access_key_status: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsIamAccessKeyStatus') }})
    resource_aws_iam_access_key_user_name: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsIamAccessKeyUserName') }})
    resource_aws_iam_user_user_name: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsIamUserUserName') }})
    resource_aws_s3_bucket_owner_id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsS3BucketOwnerId') }})
    resource_aws_s3_bucket_owner_name: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceAwsS3BucketOwnerName') }})
    resource_container_image_id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceContainerImageId') }})
    resource_container_image_name: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceContainerImageName') }})
    resource_container_launched_at: Optional[list[shared_datefilter.DateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceContainerLaunchedAt') }})
    resource_container_name: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceContainerName') }})
    resource_details_other: Optional[list[shared_mapfilter.MapFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceDetailsOther') }})
    resource_id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    resource_partition: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourcePartition') }})
    resource_region: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceRegion') }})
    resource_tags: Optional[list[shared_mapfilter.MapFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceTags') }})
    resource_type: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    severity_label: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SeverityLabel') }})
    severity_normalized: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SeverityNormalized') }})
    severity_product: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SeverityProduct') }})
    source_url: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceUrl') }})
    threat_intel_indicator_category: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThreatIntelIndicatorCategory') }})
    threat_intel_indicator_last_observed_at: Optional[list[shared_datefilter.DateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThreatIntelIndicatorLastObservedAt') }})
    threat_intel_indicator_source: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThreatIntelIndicatorSource') }})
    threat_intel_indicator_source_url: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThreatIntelIndicatorSourceUrl') }})
    threat_intel_indicator_type: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThreatIntelIndicatorType') }})
    threat_intel_indicator_value: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThreatIntelIndicatorValue') }})
    title: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    type: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    updated_at: Optional[list[shared_datefilter.DateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedAt') }})
    user_defined_fields: Optional[list[shared_mapfilter.MapFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserDefinedFields') }})
    verification_state: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VerificationState') }})
    workflow_state: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowState') }})
    workflow_status: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowStatus') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateInsightRequestBody:
    filters: CreateInsightRequestBodyFilters = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filters') }})
    group_by_attribute: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupByAttribute') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

@dataclasses.dataclass
class CreateInsightRequest:
    headers: CreateInsightHeaders = dataclasses.field()
    request: CreateInsightRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateInsightResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_insight_response: Optional[shared_createinsightresponse.CreateInsightResponse] = dataclasses.field(default=None)
    internal_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_access_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_conflict_exception: Optional[Any] = dataclasses.field(default=None)
    

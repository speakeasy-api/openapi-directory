"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import booleanfilter as shared_booleanfilter
from ..shared import datefilter as shared_datefilter
from ..shared import ipfilter as shared_ipfilter
from ..shared import keywordfilter as shared_keywordfilter
from ..shared import mapfilter as shared_mapfilter
from ..shared import numberfilter as shared_numberfilter
from ..shared import stringfilter as shared_stringfilter
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateFindingsRequestBodyFilters:
    r"""<p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p>"""
    
    aws_account_id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('AwsAccountId'), 'exclude': lambda f: f is None }})  
    company_name: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CompanyName'), 'exclude': lambda f: f is None }})  
    compliance_associated_standards_id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ComplianceAssociatedStandardsId'), 'exclude': lambda f: f is None }})  
    compliance_security_control_id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ComplianceSecurityControlId'), 'exclude': lambda f: f is None }})  
    compliance_status: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ComplianceStatus'), 'exclude': lambda f: f is None }})  
    confidence: Optional[list[shared_numberfilter.NumberFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Confidence'), 'exclude': lambda f: f is None }})  
    created_at: Optional[list[shared_datefilter.DateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CreatedAt'), 'exclude': lambda f: f is None }})  
    criticality: Optional[list[shared_numberfilter.NumberFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Criticality'), 'exclude': lambda f: f is None }})  
    description: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Description'), 'exclude': lambda f: f is None }})  
    finding_provider_fields_confidence: Optional[list[shared_numberfilter.NumberFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FindingProviderFieldsConfidence'), 'exclude': lambda f: f is None }})  
    finding_provider_fields_criticality: Optional[list[shared_numberfilter.NumberFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FindingProviderFieldsCriticality'), 'exclude': lambda f: f is None }})  
    finding_provider_fields_related_findings_id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FindingProviderFieldsRelatedFindingsId'), 'exclude': lambda f: f is None }})  
    finding_provider_fields_related_findings_product_arn: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FindingProviderFieldsRelatedFindingsProductArn'), 'exclude': lambda f: f is None }})  
    finding_provider_fields_severity_label: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FindingProviderFieldsSeverityLabel'), 'exclude': lambda f: f is None }})  
    finding_provider_fields_severity_original: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FindingProviderFieldsSeverityOriginal'), 'exclude': lambda f: f is None }})  
    finding_provider_fields_types: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FindingProviderFieldsTypes'), 'exclude': lambda f: f is None }})  
    first_observed_at: Optional[list[shared_datefilter.DateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FirstObservedAt'), 'exclude': lambda f: f is None }})  
    generator_id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('GeneratorId'), 'exclude': lambda f: f is None }})  
    id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Id'), 'exclude': lambda f: f is None }})  
    keyword: Optional[list[shared_keywordfilter.KeywordFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Keyword'), 'exclude': lambda f: f is None }})  
    last_observed_at: Optional[list[shared_datefilter.DateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LastObservedAt'), 'exclude': lambda f: f is None }})  
    malware_name: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('MalwareName'), 'exclude': lambda f: f is None }})  
    malware_path: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('MalwarePath'), 'exclude': lambda f: f is None }})  
    malware_state: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('MalwareState'), 'exclude': lambda f: f is None }})  
    malware_type: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('MalwareType'), 'exclude': lambda f: f is None }})  
    network_destination_domain: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('NetworkDestinationDomain'), 'exclude': lambda f: f is None }})  
    network_destination_ip_v4: Optional[list[shared_ipfilter.IPFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('NetworkDestinationIpV4'), 'exclude': lambda f: f is None }})  
    network_destination_ip_v6: Optional[list[shared_ipfilter.IPFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('NetworkDestinationIpV6'), 'exclude': lambda f: f is None }})  
    network_destination_port: Optional[list[shared_numberfilter.NumberFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('NetworkDestinationPort'), 'exclude': lambda f: f is None }})  
    network_direction: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('NetworkDirection'), 'exclude': lambda f: f is None }})  
    network_protocol: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('NetworkProtocol'), 'exclude': lambda f: f is None }})  
    network_source_domain: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('NetworkSourceDomain'), 'exclude': lambda f: f is None }})  
    network_source_ip_v4: Optional[list[shared_ipfilter.IPFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('NetworkSourceIpV4'), 'exclude': lambda f: f is None }})  
    network_source_ip_v6: Optional[list[shared_ipfilter.IPFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('NetworkSourceIpV6'), 'exclude': lambda f: f is None }})  
    network_source_mac: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('NetworkSourceMac'), 'exclude': lambda f: f is None }})  
    network_source_port: Optional[list[shared_numberfilter.NumberFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('NetworkSourcePort'), 'exclude': lambda f: f is None }})  
    note_text: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('NoteText'), 'exclude': lambda f: f is None }})  
    note_updated_at: Optional[list[shared_datefilter.DateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('NoteUpdatedAt'), 'exclude': lambda f: f is None }})  
    note_updated_by: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('NoteUpdatedBy'), 'exclude': lambda f: f is None }})  
    process_launched_at: Optional[list[shared_datefilter.DateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ProcessLaunchedAt'), 'exclude': lambda f: f is None }})  
    process_name: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ProcessName'), 'exclude': lambda f: f is None }})  
    process_parent_pid: Optional[list[shared_numberfilter.NumberFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ProcessParentPid'), 'exclude': lambda f: f is None }})  
    process_path: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ProcessPath'), 'exclude': lambda f: f is None }})  
    process_pid: Optional[list[shared_numberfilter.NumberFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ProcessPid'), 'exclude': lambda f: f is None }})  
    process_terminated_at: Optional[list[shared_datefilter.DateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ProcessTerminatedAt'), 'exclude': lambda f: f is None }})  
    product_arn: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ProductArn'), 'exclude': lambda f: f is None }})  
    product_fields: Optional[list[shared_mapfilter.MapFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ProductFields'), 'exclude': lambda f: f is None }})  
    product_name: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ProductName'), 'exclude': lambda f: f is None }})  
    recommendation_text: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RecommendationText'), 'exclude': lambda f: f is None }})  
    record_state: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RecordState'), 'exclude': lambda f: f is None }})  
    region: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Region'), 'exclude': lambda f: f is None }})  
    related_findings_id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RelatedFindingsId'), 'exclude': lambda f: f is None }})  
    related_findings_product_arn: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RelatedFindingsProductArn'), 'exclude': lambda f: f is None }})  
    resource_aws_ec2_instance_iam_instance_profile_arn: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceAwsEc2InstanceIamInstanceProfileArn'), 'exclude': lambda f: f is None }})  
    resource_aws_ec2_instance_image_id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceAwsEc2InstanceImageId'), 'exclude': lambda f: f is None }})  
    resource_aws_ec2_instance_ip_v4_addresses: Optional[list[shared_ipfilter.IPFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceAwsEc2InstanceIpV4Addresses'), 'exclude': lambda f: f is None }})  
    resource_aws_ec2_instance_ip_v6_addresses: Optional[list[shared_ipfilter.IPFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceAwsEc2InstanceIpV6Addresses'), 'exclude': lambda f: f is None }})  
    resource_aws_ec2_instance_key_name: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceAwsEc2InstanceKeyName'), 'exclude': lambda f: f is None }})  
    resource_aws_ec2_instance_launched_at: Optional[list[shared_datefilter.DateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceAwsEc2InstanceLaunchedAt'), 'exclude': lambda f: f is None }})  
    resource_aws_ec2_instance_subnet_id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceAwsEc2InstanceSubnetId'), 'exclude': lambda f: f is None }})  
    resource_aws_ec2_instance_type: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceAwsEc2InstanceType'), 'exclude': lambda f: f is None }})  
    resource_aws_ec2_instance_vpc_id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceAwsEc2InstanceVpcId'), 'exclude': lambda f: f is None }})  
    resource_aws_iam_access_key_created_at: Optional[list[shared_datefilter.DateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceAwsIamAccessKeyCreatedAt'), 'exclude': lambda f: f is None }})  
    resource_aws_iam_access_key_principal_name: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceAwsIamAccessKeyPrincipalName'), 'exclude': lambda f: f is None }})  
    resource_aws_iam_access_key_status: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceAwsIamAccessKeyStatus'), 'exclude': lambda f: f is None }})  
    resource_aws_iam_access_key_user_name: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceAwsIamAccessKeyUserName'), 'exclude': lambda f: f is None }})  
    resource_aws_iam_user_user_name: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceAwsIamUserUserName'), 'exclude': lambda f: f is None }})  
    resource_aws_s3_bucket_owner_id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceAwsS3BucketOwnerId'), 'exclude': lambda f: f is None }})  
    resource_aws_s3_bucket_owner_name: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceAwsS3BucketOwnerName'), 'exclude': lambda f: f is None }})  
    resource_container_image_id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceContainerImageId'), 'exclude': lambda f: f is None }})  
    resource_container_image_name: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceContainerImageName'), 'exclude': lambda f: f is None }})  
    resource_container_launched_at: Optional[list[shared_datefilter.DateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceContainerLaunchedAt'), 'exclude': lambda f: f is None }})  
    resource_container_name: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceContainerName'), 'exclude': lambda f: f is None }})  
    resource_details_other: Optional[list[shared_mapfilter.MapFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceDetailsOther'), 'exclude': lambda f: f is None }})  
    resource_id: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceId'), 'exclude': lambda f: f is None }})  
    resource_partition: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourcePartition'), 'exclude': lambda f: f is None }})  
    resource_region: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceRegion'), 'exclude': lambda f: f is None }})  
    resource_tags: Optional[list[shared_mapfilter.MapFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceTags'), 'exclude': lambda f: f is None }})  
    resource_type: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ResourceType'), 'exclude': lambda f: f is None }})  
    sample: Optional[list[shared_booleanfilter.BooleanFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Sample'), 'exclude': lambda f: f is None }})  
    severity_label: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SeverityLabel'), 'exclude': lambda f: f is None }})  
    severity_normalized: Optional[list[shared_numberfilter.NumberFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SeverityNormalized'), 'exclude': lambda f: f is None }})  
    severity_product: Optional[list[shared_numberfilter.NumberFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SeverityProduct'), 'exclude': lambda f: f is None }})  
    source_url: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SourceUrl'), 'exclude': lambda f: f is None }})  
    threat_intel_indicator_category: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ThreatIntelIndicatorCategory'), 'exclude': lambda f: f is None }})  
    threat_intel_indicator_last_observed_at: Optional[list[shared_datefilter.DateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ThreatIntelIndicatorLastObservedAt'), 'exclude': lambda f: f is None }})  
    threat_intel_indicator_source: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ThreatIntelIndicatorSource'), 'exclude': lambda f: f is None }})  
    threat_intel_indicator_source_url: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ThreatIntelIndicatorSourceUrl'), 'exclude': lambda f: f is None }})  
    threat_intel_indicator_type: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ThreatIntelIndicatorType'), 'exclude': lambda f: f is None }})  
    threat_intel_indicator_value: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ThreatIntelIndicatorValue'), 'exclude': lambda f: f is None }})  
    title: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Title'), 'exclude': lambda f: f is None }})  
    type: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Type'), 'exclude': lambda f: f is None }})  
    updated_at: Optional[list[shared_datefilter.DateFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('UpdatedAt'), 'exclude': lambda f: f is None }})  
    user_defined_fields: Optional[list[shared_mapfilter.MapFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('UserDefinedFields'), 'exclude': lambda f: f is None }})  
    verification_state: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('VerificationState'), 'exclude': lambda f: f is None }})  
    workflow_state: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('WorkflowState'), 'exclude': lambda f: f is None }})  
    workflow_status: Optional[list[shared_stringfilter.StringFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('WorkflowStatus'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateFindingsRequestBodyNote:
    r"""The updated note."""
    
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Text'), 'exclude': lambda f: f is None }})  
    updated_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('UpdatedBy'), 'exclude': lambda f: f is None }})  
    
class UpdateFindingsRequestBodyRecordStateEnum(str, Enum):
    r"""The updated record state for the finding."""
    ACTIVE = 'ACTIVE'
    ARCHIVED = 'ARCHIVED'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateFindingsRequestBody:
    
    filters: UpdateFindingsRequestBodyFilters = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Filters') }})
    r"""<p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p>"""  
    note: Optional[UpdateFindingsRequestBodyNote] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Note'), 'exclude': lambda f: f is None }})
    r"""The updated note."""  
    record_state: Optional[UpdateFindingsRequestBodyRecordStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RecordState'), 'exclude': lambda f: f is None }})
    r"""The updated record state for the finding."""  
    

@dataclasses.dataclass
class UpdateFindingsRequest:
    
    request_body: UpdateFindingsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class UpdateFindingsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    internal_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalException"""  
    invalid_access_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidAccessException"""  
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidInputException"""  
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    r"""LimitExceededException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ResourceNotFoundException"""  
    update_findings_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    r"""Success"""  
    
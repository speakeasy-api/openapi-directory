import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import action as shared_action
from ..shared import compliance as shared_compliance
from ..shared import findingproviderfields as shared_findingproviderfields
from ..shared import malware as shared_malware
from ..shared import network as shared_network
from ..shared import networkpathcomponent as shared_networkpathcomponent
from ..shared import note as shared_note
from ..shared import patchsummary as shared_patchsummary
from ..shared import processdetails as shared_processdetails
from ..shared import recordstate_enum as shared_recordstate_enum
from ..shared import relatedfinding as shared_relatedfinding
from ..shared import remediation as shared_remediation
from ..shared import resource as shared_resource
from ..shared import severity as shared_severity
from ..shared import threatintelindicator as shared_threatintelindicator
from ..shared import verificationstate_enum as shared_verificationstate_enum
from ..shared import vulnerability as shared_vulnerability
from ..shared import workflow as shared_workflow
from ..shared import workflowstate_enum as shared_workflowstate_enum


@dataclass_json
@dataclasses.dataclass
class AwsSecurityFinding:
    r"""AwsSecurityFinding
    <p>Provides consistent format for the contents of the Security Hub-aggregated findings. <code>AwsSecurityFinding</code> format enables you to share findings between Amazon Web Services security services and third-party solutions, and security standards checks.</p> <note> <p>A finding is a potential security issue generated either by Amazon Web Services services or by the integrated third-party solutions and standards checks.</p> </note>
    """
    
    aws_account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsAccountId') }})
    created_at: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    generator_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeneratorId') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    product_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductArn') }})
    resources: list[shared_resource.Resource] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    schema_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaVersion') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    updated_at: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedAt') }})
    action: Optional[shared_action.Action] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    company_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompanyName') }})
    compliance: Optional[shared_compliance.Compliance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Compliance') }})
    confidence: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    criticality: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Criticality') }})
    finding_provider_fields: Optional[shared_findingproviderfields.FindingProviderFields] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindingProviderFields') }})
    first_observed_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstObservedAt') }})
    last_observed_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastObservedAt') }})
    malware: Optional[list[shared_malware.Malware]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Malware') }})
    network: Optional[shared_network.Network] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Network') }})
    network_path: Optional[list[shared_networkpathcomponent.NetworkPathComponent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkPath') }})
    note: Optional[shared_note.Note] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Note') }})
    patch_summary: Optional[shared_patchsummary.PatchSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PatchSummary') }})
    process: Optional[shared_processdetails.ProcessDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Process') }})
    product_fields: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductFields') }})
    product_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductName') }})
    record_state: Optional[shared_recordstate_enum.RecordStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordState') }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Region') }})
    related_findings: Optional[list[shared_relatedfinding.RelatedFinding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelatedFindings') }})
    remediation: Optional[shared_remediation.Remediation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Remediation') }})
    severity: Optional[shared_severity.Severity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Severity') }})
    source_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceUrl') }})
    threat_intel_indicators: Optional[list[shared_threatintelindicator.ThreatIntelIndicator]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThreatIntelIndicators') }})
    types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Types') }})
    user_defined_fields: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserDefinedFields') }})
    verification_state: Optional[shared_verificationstate_enum.VerificationStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VerificationState') }})
    vulnerabilities: Optional[list[shared_vulnerability.Vulnerability]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Vulnerabilities') }})
    workflow: Optional[shared_workflow.Workflow] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Workflow') }})
    workflow_state: Optional[shared_workflowstate_enum.WorkflowStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowState') }})
    

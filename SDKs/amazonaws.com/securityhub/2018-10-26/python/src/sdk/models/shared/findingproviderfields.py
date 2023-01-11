import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import relatedfinding as shared_relatedfinding
from ..shared import findingproviderseverity as shared_findingproviderseverity


@dataclass_json
@dataclasses.dataclass
class FindingProviderFields:
    r"""FindingProviderFields
    In a <code>BatchImportFindings</code> request, finding providers use <code>FindingProviderFields</code> to provide and update values for confidence, criticality, related findings, severity, and types.
    """
    
    confidence: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    criticality: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Criticality') }})
    related_findings: Optional[list[shared_relatedfinding.RelatedFinding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelatedFindings') }})
    severity: Optional[shared_findingproviderseverity.FindingProviderSeverity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Severity') }})
    types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Types') }})
    

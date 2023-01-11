import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conformancepackcompliancetype_enum as shared_conformancepackcompliancetype_enum
from ..shared import evaluationresultidentifier as shared_evaluationresultidentifier


@dataclass_json
@dataclasses.dataclass
class ConformancePackEvaluationResult:
    r"""ConformancePackEvaluationResult
    The details of a conformance pack evaluation. Provides Config rule and Amazon Web Services resource type that was evaluated, the compliance of the conformance pack, related time stamps, and supplementary information. 
    """
    
    compliance_type: shared_conformancepackcompliancetype_enum.ConformancePackComplianceTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceType') }})
    config_rule_invoked_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleInvokedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    evaluation_result_identifier: shared_evaluationresultidentifier.EvaluationResultIdentifier = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationResultIdentifier') }})
    result_recorded_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultRecordedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    annotation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Annotation') }})
    

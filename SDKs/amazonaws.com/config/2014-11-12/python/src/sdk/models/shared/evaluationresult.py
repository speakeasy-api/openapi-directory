import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compliancetype_enum as shared_compliancetype_enum
from ..shared import evaluationresultidentifier as shared_evaluationresultidentifier


@dataclass_json
@dataclasses.dataclass
class EvaluationResult:
    r"""EvaluationResult
    The details of an Config evaluation. Provides the Amazon Web Services resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information.
    """
    
    annotation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Annotation') }})
    compliance_type: Optional[shared_compliancetype_enum.ComplianceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComplianceType') }})
    config_rule_invoked_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleInvokedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    evaluation_result_identifier: Optional[shared_evaluationresultidentifier.EvaluationResultIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationResultIdentifier') }})
    result_recorded_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultRecordedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    result_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultToken') }})
    

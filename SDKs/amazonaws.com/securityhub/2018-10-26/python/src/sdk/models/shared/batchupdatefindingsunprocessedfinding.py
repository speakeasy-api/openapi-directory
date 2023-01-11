import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awssecurityfindingidentifier as shared_awssecurityfindingidentifier


@dataclass_json
@dataclasses.dataclass
class BatchUpdateFindingsUnprocessedFinding:
    r"""BatchUpdateFindingsUnprocessedFinding
    A finding from a <code>BatchUpdateFindings</code> request that Security Hub was unable to update.
    """
    
    error_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    error_message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    finding_identifier: shared_awssecurityfindingidentifier.AwsSecurityFindingIdentifier = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FindingIdentifier') }})
    

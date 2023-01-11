import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import evaluationresult as shared_evaluationresult
from ..shared import groundtruthmanifest as shared_groundtruthmanifest
from ..shared import outputconfig as shared_outputconfig
from ..shared import projectversionstatus_enum as shared_projectversionstatus_enum
from ..shared import testingdataresult as shared_testingdataresult
from ..shared import trainingdataresult as shared_trainingdataresult


@dataclass_json
@dataclasses.dataclass
class ProjectVersionDescription:
    r"""ProjectVersionDescription
    The description of a version of a model.
    """
    
    billable_training_time_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BillableTrainingTimeInSeconds') }})
    creation_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    evaluation_result: Optional[shared_evaluationresult.EvaluationResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationResult') }})
    kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    manifest_summary: Optional[shared_groundtruthmanifest.GroundTruthManifest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ManifestSummary') }})
    min_inference_units: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinInferenceUnits') }})
    output_config: Optional[shared_outputconfig.OutputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputConfig') }})
    project_version_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectVersionArn') }})
    status: Optional[shared_projectversionstatus_enum.ProjectVersionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    testing_data_result: Optional[shared_testingdataresult.TestingDataResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TestingDataResult') }})
    training_data_result: Optional[shared_trainingdataresult.TrainingDataResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingDataResult') }})
    training_end_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingEndTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

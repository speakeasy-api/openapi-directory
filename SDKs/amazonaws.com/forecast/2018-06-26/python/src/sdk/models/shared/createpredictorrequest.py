import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import automloverridestrategy_enum as shared_automloverridestrategy_enum
from ..shared import encryptionconfig as shared_encryptionconfig
from ..shared import evaluationparameters as shared_evaluationparameters
from ..shared import featurizationconfig as shared_featurizationconfig
from ..shared import hyperparametertuningjobconfig as shared_hyperparametertuningjobconfig
from ..shared import inputdataconfig as shared_inputdataconfig
from ..shared import optimizationmetric_enum as shared_optimizationmetric_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreatePredictorRequest:
    featurization_config: shared_featurizationconfig.FeaturizationConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeaturizationConfig') }})
    forecast_horizon: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForecastHorizon') }})
    input_data_config: shared_inputdataconfig.InputDataConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    predictor_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictorName') }})
    algorithm_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlgorithmArn') }})
    auto_ml_override_strategy: Optional[shared_automloverridestrategy_enum.AutoMlOverrideStrategyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLOverrideStrategy') }})
    encryption_config: Optional[shared_encryptionconfig.EncryptionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfig') }})
    evaluation_parameters: Optional[shared_evaluationparameters.EvaluationParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationParameters') }})
    forecast_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ForecastTypes') }})
    hpo_config: Optional[shared_hyperparametertuningjobconfig.HyperParameterTuningJobConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HPOConfig') }})
    optimization_metric: Optional[shared_optimizationmetric_enum.OptimizationMetricEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OptimizationMetric') }})
    perform_auto_ml: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PerformAutoML') }})
    perform_hpo: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PerformHPO') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    training_parameters: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingParameters') }})
    

"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import annotationconsolidationconfig as shared_annotationconsolidationconfig
from ..shared import publicworkforcetaskprice as shared_publicworkforcetaskprice
from ..shared import uiconfig as shared_uiconfig
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class HumanTaskConfig:
    r"""Information required for human workers to complete a labeling task."""
    
    annotation_consolidation_config: shared_annotationconsolidationconfig.AnnotationConsolidationConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('AnnotationConsolidationConfig') }})  
    number_of_human_workers_per_data_object: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('NumberOfHumanWorkersPerDataObject') }})  
    pre_human_task_lambda_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PreHumanTaskLambdaArn') }})  
    task_description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TaskDescription') }})  
    task_time_limit_in_seconds: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TaskTimeLimitInSeconds') }})  
    task_title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TaskTitle') }})  
    ui_config: shared_uiconfig.UIConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('UiConfig') }})  
    workteam_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('WorkteamArn') }})  
    max_concurrent_task_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('MaxConcurrentTaskCount'), 'exclude': lambda f: f is None }})  
    public_workforce_task_price: Optional[shared_publicworkforcetaskprice.PublicWorkforceTaskPrice] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PublicWorkforceTaskPrice'), 'exclude': lambda f: f is None }})  
    task_availability_lifetime_in_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TaskAvailabilityLifetimeInSeconds'), 'exclude': lambda f: f is None }})  
    task_keywords: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TaskKeywords'), 'exclude': lambda f: f is None }})  
    
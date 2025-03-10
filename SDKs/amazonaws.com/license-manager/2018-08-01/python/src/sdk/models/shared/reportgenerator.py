"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import reportcontext as shared_reportcontext
from ..shared import reportfrequency as shared_reportfrequency
from ..shared import reporttype_enum as shared_reporttype_enum
from ..shared import s3location as shared_s3location
from ..shared import tag as shared_tag
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ReportGenerator:
    r"""Describe the details of a report generator."""
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CreateTime'), 'exclude': lambda f: f is None }})  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Description'), 'exclude': lambda f: f is None }})  
    last_report_generation_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LastReportGenerationTime'), 'exclude': lambda f: f is None }})  
    last_run_failure_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LastRunFailureReason'), 'exclude': lambda f: f is None }})  
    last_run_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LastRunStatus'), 'exclude': lambda f: f is None }})  
    license_manager_report_generator_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LicenseManagerReportGeneratorArn'), 'exclude': lambda f: f is None }})  
    report_context: Optional[shared_reportcontext.ReportContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ReportContext'), 'exclude': lambda f: f is None }})  
    report_creator_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ReportCreatorAccount'), 'exclude': lambda f: f is None }})  
    report_frequency: Optional[shared_reportfrequency.ReportFrequency] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ReportFrequency'), 'exclude': lambda f: f is None }})  
    report_generator_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ReportGeneratorName'), 'exclude': lambda f: f is None }})  
    report_type: Optional[list[shared_reporttype_enum.ReportTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ReportType'), 'exclude': lambda f: f is None }})  
    s3_location: Optional[shared_s3location.S3Location] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('S3Location'), 'exclude': lambda f: f is None }})  
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Tags'), 'exclude': lambda f: f is None }})  
    
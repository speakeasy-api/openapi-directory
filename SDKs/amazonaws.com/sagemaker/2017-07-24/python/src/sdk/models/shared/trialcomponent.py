"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import metadataproperties as shared_metadataproperties
from ..shared import parent as shared_parent
from ..shared import tag as shared_tag
from ..shared import trialcomponentartifact as shared_trialcomponentartifact
from ..shared import trialcomponentmetricsummary as shared_trialcomponentmetricsummary
from ..shared import trialcomponentparametervalue as shared_trialcomponentparametervalue
from ..shared import trialcomponentsource as shared_trialcomponentsource
from ..shared import trialcomponentsourcedetail as shared_trialcomponentsourcedetail
from ..shared import trialcomponentstatus as shared_trialcomponentstatus
from ..shared import usercontext as shared_usercontext
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class TrialComponent:
    r"""The properties of a trial component as returned by the <a>Search</a> API."""
    
    created_by: Optional[shared_usercontext.UserContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CreatedBy'), 'exclude': lambda f: f is None }})  
    creation_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})  
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DisplayName'), 'exclude': lambda f: f is None }})  
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})  
    input_artifacts: Optional[dict[str, shared_trialcomponentartifact.TrialComponentArtifact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('InputArtifacts'), 'exclude': lambda f: f is None }})  
    last_modified_by: Optional[shared_usercontext.UserContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LastModifiedBy'), 'exclude': lambda f: f is None }})
    r"""Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card."""  
    last_modified_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LastModifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})  
    lineage_group_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LineageGroupArn'), 'exclude': lambda f: f is None }})  
    metadata_properties: Optional[shared_metadataproperties.MetadataProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('MetadataProperties'), 'exclude': lambda f: f is None }})
    r"""Metadata properties of the tracking entity, trial, or trial component."""  
    metrics: Optional[list[shared_trialcomponentmetricsummary.TrialComponentMetricSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Metrics'), 'exclude': lambda f: f is None }})  
    output_artifacts: Optional[dict[str, shared_trialcomponentartifact.TrialComponentArtifact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('OutputArtifacts'), 'exclude': lambda f: f is None }})  
    parameters: Optional[dict[str, shared_trialcomponentparametervalue.TrialComponentParameterValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Parameters'), 'exclude': lambda f: f is None }})  
    parents: Optional[list[shared_parent.Parent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Parents'), 'exclude': lambda f: f is None }})  
    run_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RunName'), 'exclude': lambda f: f is None }})  
    source: Optional[shared_trialcomponentsource.TrialComponentSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Source'), 'exclude': lambda f: f is None }})  
    source_detail: Optional[shared_trialcomponentsourcedetail.TrialComponentSourceDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SourceDetail'), 'exclude': lambda f: f is None }})  
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})  
    status: Optional[shared_trialcomponentstatus.TrialComponentStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Status'), 'exclude': lambda f: f is None }})
    r"""The status of the trial component."""  
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Tags'), 'exclude': lambda f: f is None }})  
    trial_component_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TrialComponentArn'), 'exclude': lambda f: f is None }})  
    trial_component_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('TrialComponentName'), 'exclude': lambda f: f is None }})  
    
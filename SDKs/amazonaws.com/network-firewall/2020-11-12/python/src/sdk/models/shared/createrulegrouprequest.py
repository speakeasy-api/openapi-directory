"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import encryptionconfiguration as shared_encryptionconfiguration
from ..shared import rulegroup as shared_rulegroup
from ..shared import rulegrouptype_enum as shared_rulegrouptype_enum
from ..shared import sourcemetadata as shared_sourcemetadata
from ..shared import tag as shared_tag
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateRuleGroupRequest:
    
    capacity: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Capacity') }})  
    rule_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RuleGroupName') }})  
    type: shared_rulegrouptype_enum.RuleGroupTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Type') }})  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Description'), 'exclude': lambda f: f is None }})  
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DryRun'), 'exclude': lambda f: f is None }})  
    encryption_configuration: Optional[shared_encryptionconfiguration.EncryptionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('EncryptionConfiguration'), 'exclude': lambda f: f is None }})  
    rule_group: Optional[shared_rulegroup.RuleGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RuleGroup'), 'exclude': lambda f: f is None }})  
    rules: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Rules'), 'exclude': lambda f: f is None }})  
    source_metadata: Optional[shared_sourcemetadata.SourceMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SourceMetadata'), 'exclude': lambda f: f is None }})  
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Tags'), 'exclude': lambda f: f is None }})  
    
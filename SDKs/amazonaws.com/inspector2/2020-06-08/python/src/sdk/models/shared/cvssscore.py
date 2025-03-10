"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CvssScore:
    r"""The CVSS score for a finding."""
    
    base_score: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('baseScore') }})  
    scoring_vector: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('scoringVector') }})  
    source: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('source') }})  
    version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('version') }})  
    
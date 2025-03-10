"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import datapoint as shared_datapoint
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Forecast:
    r"""Provides information about a forecast. Returned as part of the <a>QueryForecast</a> response."""
    
    predictions: Optional[dict[str, list[shared_datapoint.DataPoint]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Predictions'), 'exclude': lambda f: f is None }})  
    
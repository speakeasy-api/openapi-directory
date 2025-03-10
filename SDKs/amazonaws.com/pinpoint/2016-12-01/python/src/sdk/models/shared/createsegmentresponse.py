"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import segmentresponse as shared_segmentresponse
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateSegmentResponse:
    r"""Success"""
    
    segment_response: shared_segmentresponse.SegmentResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('SegmentResponse') }})
    r"""Provides information about the configuration, dimension, and other settings for a segment."""  
    
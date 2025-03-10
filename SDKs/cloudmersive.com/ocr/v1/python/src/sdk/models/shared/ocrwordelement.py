"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class OcrWordElement:
    r"""A single word in an OCR document"""
    
    block_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('BlockNumber'), 'exclude': lambda f: f is None }})
    r"""Index of the containing block"""  
    confidence_level: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ConfidenceLevel'), 'exclude': lambda f: f is None }})
    r"""Confidence level of the machine learning result; possible values are 0.0 (lowest accuracy) - 1.0 (highest accuracy)"""  
    height: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Height'), 'exclude': lambda f: f is None }})
    r"""Height of the word in pixels"""  
    line_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LineNumber'), 'exclude': lambda f: f is None }})
    r"""Line number of the word"""  
    page_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('PageNumber'), 'exclude': lambda f: f is None }})
    r"""Index of the containing page"""  
    paragraph_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ParagraphNumber'), 'exclude': lambda f: f is None }})
    r"""Index of the containing paragraph"""  
    width: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Width'), 'exclude': lambda f: f is None }})
    r"""Width of the word in pixels"""  
    word_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('WordNumber'), 'exclude': lambda f: f is None }})
    r"""Index of the word in the line"""  
    word_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('WordText'), 'exclude': lambda f: f is None }})
    r"""Text of the word"""  
    x_left: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('XLeft'), 'exclude': lambda f: f is None }})
    r"""X location of the left edge of the word in pixels"""  
    y_top: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('YTop'), 'exclude': lambda f: f is None }})
    r"""Y location of the top edge of the word in pixels"""  
    
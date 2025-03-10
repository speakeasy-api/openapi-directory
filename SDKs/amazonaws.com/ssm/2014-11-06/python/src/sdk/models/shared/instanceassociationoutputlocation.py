"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import s3outputlocation as shared_s3outputlocation
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class InstanceAssociationOutputLocation:
    r"""<p>An S3 bucket where you want to store the results of this request.</p> <p>For the minimal permissions required to enable Amazon S3 output for an association, see <a href=\\"https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-state-assoc.html\\">Creating associations</a> in the <i>Systems Manager User Guide</i>. </p>"""
    
    s3_location: Optional[shared_s3outputlocation.S3OutputLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('S3Location'), 'exclude': lambda f: f is None }})  
    
"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import taglist as shared_taglist
from typing import Optional


@dataclasses.dataclass
class CreateCustomDBEngineVersionMessage:
    
    engine: str = dataclasses.field()  
    engine_version: str = dataclasses.field()  
    database_installation_files_s3_bucket_name: Optional[str] = dataclasses.field(default=None)  
    database_installation_files_s3_prefix: Optional[str] = dataclasses.field(default=None)  
    description: Optional[str] = dataclasses.field(default=None)  
    image_id: Optional[str] = dataclasses.field(default=None)  
    kms_key_id: Optional[str] = dataclasses.field(default=None)  
    manifest: Optional[str] = dataclasses.field(default=None)  
    tags: Optional[list[shared_taglist.TagList]] = dataclasses.field(default=None)
    r"""A list of tags. For more information, see <a href=\\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html\\">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>"""  
    
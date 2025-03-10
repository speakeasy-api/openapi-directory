"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import taglist as shared_taglist
from typing import Optional


@dataclasses.dataclass
class CopyDBSnapshotMessage:
    r"""<p/>"""
    
    source_db_snapshot_identifier: str = dataclasses.field()  
    target_db_snapshot_identifier: str = dataclasses.field()  
    copy_option_group: Optional[bool] = dataclasses.field(default=None)  
    copy_tags: Optional[bool] = dataclasses.field(default=None)  
    kms_key_id: Optional[str] = dataclasses.field(default=None)  
    option_group_name: Optional[str] = dataclasses.field(default=None)  
    pre_signed_url: Optional[str] = dataclasses.field(default=None)  
    source_region: Optional[str] = dataclasses.field(default=None)  
    tags: Optional[list[shared_taglist.TagList]] = dataclasses.field(default=None)
    r"""A list of tags. For more information, see <a href=\\"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html\\">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>"""  
    target_custom_availability_zone: Optional[str] = dataclasses.field(default=None)  
    
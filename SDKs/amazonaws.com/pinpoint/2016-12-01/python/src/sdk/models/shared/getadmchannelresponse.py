"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import admchannelresponse as shared_admchannelresponse
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetAdmChannelResponse:
    r"""Success"""
    
    adm_channel_response: shared_admchannelresponse.ADMChannelResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ADMChannelResponse') }})
    r"""Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application."""  
    
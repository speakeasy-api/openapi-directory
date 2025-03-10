"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import voicechannelresponse as shared_voicechannelresponse
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetVoiceChannelResponse:
    r"""Success"""
    
    voice_channel_response: shared_voicechannelresponse.VoiceChannelResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('VoiceChannelResponse') }})
    r"""Provides information about the status and settings of the voice channel for an application."""  
    
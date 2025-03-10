"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import putassetpropertyvalueentry as shared_putassetpropertyvalueentry
from dataclasses_json import Undefined, dataclass_json
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class IotSiteWiseAction:
    r"""Describes an action to send data from an MQTT message that triggered the rule to IoT SiteWise asset properties."""
    
    put_asset_property_value_entries: list[shared_putassetpropertyvalueentry.PutAssetPropertyValueEntry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('putAssetPropertyValueEntries') }})  
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('roleArn') }})  
    
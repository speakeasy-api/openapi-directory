"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class InlineResponse200Connection:
    
    autonomous_system_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('autonomous_system_number'), 'exclude': lambda f: f is None }})  
    autonomous_system_organization: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('autonomous_system_organization'), 'exclude': lambda f: f is None }})  
    connection_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('connection_type'), 'exclude': lambda f: f is None }})  
    isp_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('isp_name'), 'exclude': lambda f: f is None }})  
    organization_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('organization_name'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class InlineResponse200Currency:
    
    currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('currency_code'), 'exclude': lambda f: f is None }})  
    currency_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('currency_name'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class InlineResponse200Flag:
    
    emoji: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('emoji'), 'exclude': lambda f: f is None }})  
    png: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('png'), 'exclude': lambda f: f is None }})  
    svg: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('svg'), 'exclude': lambda f: f is None }})  
    unicode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('unicode'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class InlineResponse200Security:
    
    is_vpn: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('is_vpn'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class InlineResponse200Timezone:
    
    abbreviation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('abbreviation'), 'exclude': lambda f: f is None }})  
    current_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('current_time'), 'exclude': lambda f: f is None }})  
    gmt_offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('gmt_offset'), 'exclude': lambda f: f is None }})  
    is_dst: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('is_dst'), 'exclude': lambda f: f is None }})  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class InlineResponse200:
    r"""Location of geolocated IP"""
    
    city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('city'), 'exclude': lambda f: f is None }})  
    city_geoname_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('city_geoname_id'), 'exclude': lambda f: f is None }})  
    connection: Optional[InlineResponse200Connection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('connection'), 'exclude': lambda f: f is None }})  
    continent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('continent'), 'exclude': lambda f: f is None }})  
    continent_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('continent_code'), 'exclude': lambda f: f is None }})  
    continent_geoname_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('continent_geoname_id'), 'exclude': lambda f: f is None }})  
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('country'), 'exclude': lambda f: f is None }})  
    country_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('country_code'), 'exclude': lambda f: f is None }})  
    country_geoname_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('country_geoname_id'), 'exclude': lambda f: f is None }})  
    country_is_eu: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('country_is_eu'), 'exclude': lambda f: f is None }})  
    currency: Optional[InlineResponse200Currency] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('currency'), 'exclude': lambda f: f is None }})  
    flag: Optional[InlineResponse200Flag] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('flag'), 'exclude': lambda f: f is None }})  
    ip_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ip_address'), 'exclude': lambda f: f is None }})  
    latitude: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('latitude'), 'exclude': lambda f: f is None }})  
    longitude: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('longitude'), 'exclude': lambda f: f is None }})  
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('postal_code'), 'exclude': lambda f: f is None }})  
    region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('region'), 'exclude': lambda f: f is None }})  
    region_geoname_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('region_geoname_id'), 'exclude': lambda f: f is None }})  
    region_iso_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('region_iso_code'), 'exclude': lambda f: f is None }})  
    security: Optional[InlineResponse200Security] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('security'), 'exclude': lambda f: f is None }})  
    timezone: Optional[InlineResponse200Timezone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('timezone'), 'exclude': lambda f: f is None }})  
    
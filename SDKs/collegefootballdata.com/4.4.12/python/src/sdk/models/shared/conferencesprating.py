"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ConferenceSPRatingDefenseHavoc:
    
    db: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('db'), 'exclude': lambda f: f is None }})  
    front_seven: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('frontSeven'), 'exclude': lambda f: f is None }})  
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('total'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ConferenceSPRatingDefense:
    
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('explosiveness'), 'exclude': lambda f: f is None }})  
    havoc: Optional[ConferenceSPRatingDefenseHavoc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('havoc'), 'exclude': lambda f: f is None }})  
    pasing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('pasing'), 'exclude': lambda f: f is None }})  
    passing_downs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('passingDowns'), 'exclude': lambda f: f is None }})  
    rating: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rating'), 'exclude': lambda f: f is None }})  
    rushing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rushing'), 'exclude': lambda f: f is None }})  
    standard_downs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('standardDowns'), 'exclude': lambda f: f is None }})  
    success: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('success'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ConferenceSPRatingOffense:
    
    explosiveness: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('explosiveness'), 'exclude': lambda f: f is None }})  
    pace: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('pace'), 'exclude': lambda f: f is None }})  
    passing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('passing'), 'exclude': lambda f: f is None }})  
    passing_downs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('passingDowns'), 'exclude': lambda f: f is None }})  
    rating: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rating'), 'exclude': lambda f: f is None }})  
    run_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('runRate'), 'exclude': lambda f: f is None }})  
    rushing: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rushing'), 'exclude': lambda f: f is None }})  
    standard_downs: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('standardDowns'), 'exclude': lambda f: f is None }})  
    success: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('success'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ConferenceSPRatingSpecialTeams:
    
    rating: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rating'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ConferenceSPRating:
    
    conference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('conference'), 'exclude': lambda f: f is None }})  
    defense: Optional[ConferenceSPRatingDefense] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('defense'), 'exclude': lambda f: f is None }})  
    offense: Optional[ConferenceSPRatingOffense] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('offense'), 'exclude': lambda f: f is None }})  
    rating: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rating'), 'exclude': lambda f: f is None }})  
    second_order_wins: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('secondOrderWins'), 'exclude': lambda f: f is None }})  
    sos: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sos'), 'exclude': lambda f: f is None }})  
    special_teams: Optional[ConferenceSPRatingSpecialTeams] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('specialTeams'), 'exclude': lambda f: f is None }})  
    year: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('year'), 'exclude': lambda f: f is None }})  
    
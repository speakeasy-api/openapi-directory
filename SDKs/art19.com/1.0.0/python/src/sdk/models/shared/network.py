"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import resourceidentifier as shared_resourceidentifier
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class NetworkAttributes:
    
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('copyright'), 'exclude': lambda f: f is None }})
    r"""The copyright of the network"""  
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description'), 'exclude': lambda f: f is None }})
    r"""The description of the network eventually in HTML format"""  
    description_is_html: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description_is_html'), 'exclude': lambda f: f is None }})
    r"""Determines whether `description` is in HTML format or plain."""  
    description_plain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description_plain'), 'exclude': lambda f: f is None }})
    r"""The description with all HTML markup removed. If the description does not contain markup
    this is identitcal to `description`.
    """  
    facebook_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('facebook_url'), 'exclude': lambda f: f is None }})
    r"""Where to find this network on Facebook"""  
    instagram_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('instagram_url'), 'exclude': lambda f: f is None }})
    r"""Where to find this network on Instagram"""  
    linkedin_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('linkedin_url'), 'exclude': lambda f: f is None }})
    r"""Where to find the network on LinkedIn"""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""The name of the network"""  
    public_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('public_email'), 'exclude': lambda f: f is None }})
    r"""A public point of contact through email"""  
    public_page_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('public_page_enabled'), 'exclude': lambda f: f is None }})
    r"""If this is `true`, a public web page for this network is available under
    `https://art19.com/networks/{slug}`, where `slug` is the value of the corresponding attribute.
    This public page provides details about the network as well as descriptive links to all its
    series' public pages. If this is `false`, no such public page is available.
    """  
    slug: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('slug'), 'exclude': lambda f: f is None }})
    r"""The unique slug for the network also used on its public page for example.
    This value is unique system-wide amongst all networks _and_ series.
    """  
    tumblr_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tumblr_url'), 'exclude': lambda f: f is None }})
    r"""Where to find the network on Tumblr"""  
    twitter_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('twitter_url'), 'exclude': lambda f: f is None }})
    r"""Where to find the network on Twitter"""  
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso'), 'exclude': lambda f: f is None }})  
    website_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('website_url'), 'exclude': lambda f: f is None }})
    r"""A public website for the network"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class NetworkRelationshipsCoverImage:
    r"""The cover image for the network"""
    
    data: Optional[shared_resourceidentifier.ResourceIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('data'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class NetworkRelationshipsImages:
    r"""A collection of images linked to the network. This currently only includes
    the cover image for the network.
    """
    
    data: Optional[list[shared_resourceidentifier.ResourceIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('data'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class NetworkRelationshipsParent:
    r"""The parent network of the network"""
    
    data: Optional[shared_resourceidentifier.ResourceIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('data'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class NetworkRelationshipsSeries:
    r"""List of series within the network which are accessible to you"""
    
    data: Optional[list[shared_resourceidentifier.ResourceIdentifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('data'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class NetworkRelationships:
    
    cover_image: Optional[NetworkRelationshipsCoverImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('cover_image'), 'exclude': lambda f: f is None }})
    r"""The cover image for the network"""  
    images: Optional[NetworkRelationshipsImages] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('images'), 'exclude': lambda f: f is None }})
    r"""A collection of images linked to the network. This currently only includes
    the cover image for the network.
    """  
    parent: Optional[NetworkRelationshipsParent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('parent'), 'exclude': lambda f: f is None }})
    r"""The parent network of the network"""  
    series: Optional[NetworkRelationshipsSeries] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('series'), 'exclude': lambda f: f is None }})
    r"""List of series within the network which are accessible to you"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Network:
    
    attributes: Optional[NetworkAttributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('attributes'), 'exclude': lambda f: f is None }})  
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id'), 'exclude': lambda f: f is None }})  
    relationships: Optional[NetworkRelationships] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('relationships'), 'exclude': lambda f: f is None }})  
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type'), 'exclude': lambda f: f is None }})
    r"""The type of resource. This is always `networks`"""  
    
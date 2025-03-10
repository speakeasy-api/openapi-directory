"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import viasaddress as shared_viasaddress
from ..shared import viasname as shared_viasname
from ..shared import viaspersonaldata as shared_viaspersonaldata
from ..shared import viasphonenumber as shared_viasphonenumber
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SignatoryContact:
    
    address: Optional[shared_viasaddress.ViasAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('address'), 'exclude': lambda f: f is None }})  
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('email'), 'exclude': lambda f: f is None }})
    r"""The e-mail address of the person."""  
    full_phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('fullPhoneNumber'), 'exclude': lambda f: f is None }})
    r"""The phone number of the person provided as a single string.  It will be handled as a landline phone.
    Examples: \"0031 6 11 22 33 44\", \"+316/1122-3344\", \"(0031) 611223344\" 
    """  
    job_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('jobTitle'), 'exclude': lambda f: f is None }})
    r"""Job title of the signatory.
    
    Example values: **Chief Executive Officer**, **Chief Financial Officer**, **Chief Operating Officer**, **President**, **Vice President**, **Executive President**, **Managing Member**, **Partner**, **Treasurer**, **Director**, or **Other**.
    """  
    name: Optional[shared_viasname.ViasName] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})  
    personal_data: Optional[shared_viaspersonaldata.ViasPersonalData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('personalData'), 'exclude': lambda f: f is None }})  
    phone_number: Optional[shared_viasphonenumber.ViasPhoneNumber] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('phoneNumber'), 'exclude': lambda f: f is None }})  
    signatory_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('signatoryCode'), 'exclude': lambda f: f is None }})
    r"""The unique identifier (UUID) of the signatory.
    >**If, during an Account Holder create or update request, this field is left blank (but other fields provided), a new Signatory will be created with a procedurally-generated UUID.**
    
    >**If, during an Account Holder create request, a UUID is provided, the creation of the Signatory will fail while the creation of the Account Holder will continue.**
    
    >**If, during an Account Holder update request, a UUID that is not correlated with an existing Signatory is provided, the update of the Signatory will fail.**
    
    >**If, during an Account Holder update request, a UUID that is correlated with an existing Signatory is provided, the existing Signatory will be updated.**
    """  
    signatory_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('signatoryReference'), 'exclude': lambda f: f is None }})
    r"""Your reference for the signatory."""  
    web_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('webAddress'), 'exclude': lambda f: f is None }})
    r"""The URL of the person's website."""  
    
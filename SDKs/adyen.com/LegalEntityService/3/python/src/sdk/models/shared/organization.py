"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import address as shared_address
from ..shared import phonenumber as shared_phonenumber
from ..shared import stockdata as shared_stockdata
from ..shared import taxinformation as shared_taxinformation
from ..shared import taxreportingclassification as shared_taxreportingclassification
from ..shared import webdata as shared_webdata
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class OrganizationTypeEnum(str, Enum):
    r"""Type of organization.
    
    Possible values: **associationIncorporated**, **governmentalOrganization**, **listedPublicCompany**, **nonProfit**, **partnershipIncorporated**, **privateCompany**.
    """
    ASSOCIATION_INCORPORATED = 'associationIncorporated'
    GOVERNMENTAL_ORGANIZATION = 'governmentalOrganization'
    LISTED_PUBLIC_COMPANY = 'listedPublicCompany'
    NON_PROFIT = 'nonProfit'
    PARTNERSHIP_INCORPORATED = 'partnershipIncorporated'
    PRIVATE_COMPANY = 'privateCompany'

class OrganizationVatAbsenceReasonEnum(str, Enum):
    r"""The reason the organization has not provided a VAT number.
    
    Possible values: **industryExemption**, **belowTaxThreshold**.
    """
    INDUSTRY_EXEMPTION = 'industryExemption'
    BELOW_TAX_THRESHOLD = 'belowTaxThreshold'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class OrganizationInput:
    
    legal_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('legalName') }})
    r"""The organization's legal name."""  
    registered_address: shared_address.Address = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('registeredAddress') }})  
    date_of_incorporation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dateOfIncorporation'), 'exclude': lambda f: f is None }})
    r"""The date when the organization was incorporated in YYYY-MM-DD format."""  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description'), 'exclude': lambda f: f is None }})
    r"""Your description for the organization."""  
    doing_business_as: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('doingBusinessAs'), 'exclude': lambda f: f is None }})
    r"""The organization's trading name, if different from the registered legal name."""  
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('email'), 'exclude': lambda f: f is None }})
    r"""The email address of the legal entity."""  
    phone: Optional[shared_phonenumber.PhoneNumber] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('phone'), 'exclude': lambda f: f is None }})  
    principal_place_of_business: Optional[shared_address.Address] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('principalPlaceOfBusiness'), 'exclude': lambda f: f is None }})  
    registration_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('registrationNumber'), 'exclude': lambda f: f is None }})
    r"""The organization's registration number."""  
    stock_data: Optional[shared_stockdata.StockData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('stockData'), 'exclude': lambda f: f is None }})  
    tax_information: Optional[list[shared_taxinformation.TaxInformation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('taxInformation'), 'exclude': lambda f: f is None }})
    r"""The tax information of the organization."""  
    tax_reporting_classification: Optional[shared_taxreportingclassification.TaxReportingClassification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('taxReportingClassification'), 'exclude': lambda f: f is None }})  
    type: Optional[OrganizationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type'), 'exclude': lambda f: f is None }})
    r"""Type of organization.
    
    Possible values: **associationIncorporated**, **governmentalOrganization**, **listedPublicCompany**, **nonProfit**, **partnershipIncorporated**, **privateCompany**.
    """  
    vat_absence_reason: Optional[OrganizationVatAbsenceReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('vatAbsenceReason'), 'exclude': lambda f: f is None }})
    r"""The reason the organization has not provided a VAT number.
    
    Possible values: **industryExemption**, **belowTaxThreshold**.
    """  
    vat_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('vatNumber'), 'exclude': lambda f: f is None }})
    r"""The organization's VAT number."""  
    web_data: Optional[shared_webdata.WebDataInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('webData'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Organization:
    
    legal_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('legalName') }})
    r"""The organization's legal name."""  
    registered_address: shared_address.Address = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('registeredAddress') }})  
    date_of_incorporation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dateOfIncorporation'), 'exclude': lambda f: f is None }})
    r"""The date when the organization was incorporated in YYYY-MM-DD format."""  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description'), 'exclude': lambda f: f is None }})
    r"""Your description for the organization."""  
    doing_business_as: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('doingBusinessAs'), 'exclude': lambda f: f is None }})
    r"""The organization's trading name, if different from the registered legal name."""  
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('email'), 'exclude': lambda f: f is None }})
    r"""The email address of the legal entity."""  
    phone: Optional[shared_phonenumber.PhoneNumber] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('phone'), 'exclude': lambda f: f is None }})  
    principal_place_of_business: Optional[shared_address.Address] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('principalPlaceOfBusiness'), 'exclude': lambda f: f is None }})  
    registration_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('registrationNumber'), 'exclude': lambda f: f is None }})
    r"""The organization's registration number."""  
    stock_data: Optional[shared_stockdata.StockData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('stockData'), 'exclude': lambda f: f is None }})  
    tax_information: Optional[list[shared_taxinformation.TaxInformation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('taxInformation'), 'exclude': lambda f: f is None }})
    r"""The tax information of the organization."""  
    tax_reporting_classification: Optional[shared_taxreportingclassification.TaxReportingClassification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('taxReportingClassification'), 'exclude': lambda f: f is None }})  
    type: Optional[OrganizationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type'), 'exclude': lambda f: f is None }})
    r"""Type of organization.
    
    Possible values: **associationIncorporated**, **governmentalOrganization**, **listedPublicCompany**, **nonProfit**, **partnershipIncorporated**, **privateCompany**.
    """  
    vat_absence_reason: Optional[OrganizationVatAbsenceReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('vatAbsenceReason'), 'exclude': lambda f: f is None }})
    r"""The reason the organization has not provided a VAT number.
    
    Possible values: **industryExemption**, **belowTaxThreshold**.
    """  
    vat_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('vatNumber'), 'exclude': lambda f: f is None }})
    r"""The organization's VAT number."""  
    web_data: Optional[shared_webdata.WebData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('webData'), 'exclude': lambda f: f is None }})  
    
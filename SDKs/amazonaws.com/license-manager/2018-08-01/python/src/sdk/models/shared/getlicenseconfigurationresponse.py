"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import automateddiscoveryinformation as shared_automateddiscoveryinformation
from ..shared import consumedlicensesummary as shared_consumedlicensesummary
from ..shared import licensecountingtype_enum as shared_licensecountingtype_enum
from ..shared import managedresourcesummary as shared_managedresourcesummary
from ..shared import productinformation as shared_productinformation
from ..shared import tag as shared_tag
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetLicenseConfigurationResponse:
    r"""Success"""
    
    automated_discovery_information: Optional[shared_automateddiscoveryinformation.AutomatedDiscoveryInformation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('AutomatedDiscoveryInformation'), 'exclude': lambda f: f is None }})  
    consumed_licenses: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ConsumedLicenses'), 'exclude': lambda f: f is None }})  
    consumed_license_summary_list: Optional[list[shared_consumedlicensesummary.ConsumedLicenseSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ConsumedLicenseSummaryList'), 'exclude': lambda f: f is None }})  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Description'), 'exclude': lambda f: f is None }})  
    disassociate_when_not_found: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('DisassociateWhenNotFound'), 'exclude': lambda f: f is None }})  
    license_configuration_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LicenseConfigurationArn'), 'exclude': lambda f: f is None }})  
    license_configuration_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LicenseConfigurationId'), 'exclude': lambda f: f is None }})  
    license_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LicenseCount'), 'exclude': lambda f: f is None }})  
    license_count_hard_limit: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LicenseCountHardLimit'), 'exclude': lambda f: f is None }})  
    license_counting_type: Optional[shared_licensecountingtype_enum.LicenseCountingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LicenseCountingType'), 'exclude': lambda f: f is None }})  
    license_rules: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('LicenseRules'), 'exclude': lambda f: f is None }})  
    managed_resource_summary_list: Optional[list[shared_managedresourcesummary.ManagedResourceSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ManagedResourceSummaryList'), 'exclude': lambda f: f is None }})  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Name'), 'exclude': lambda f: f is None }})  
    owner_account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('OwnerAccountId'), 'exclude': lambda f: f is None }})  
    product_information_list: Optional[list[shared_productinformation.ProductInformation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ProductInformationList'), 'exclude': lambda f: f is None }})  
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Status'), 'exclude': lambda f: f is None }})  
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Tags'), 'exclude': lambda f: f is None }})  
    
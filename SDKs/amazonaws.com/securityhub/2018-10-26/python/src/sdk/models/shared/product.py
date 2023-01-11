import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import integrationtype_enum as shared_integrationtype_enum


@dataclass_json
@dataclasses.dataclass
class Product:
    r"""Product
    Contains details about a product.
    """
    
    product_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductArn') }})
    activation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActivationUrl') }})
    categories: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Categories') }})
    company_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompanyName') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    integration_types: Optional[list[shared_integrationtype_enum.IntegrationTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntegrationTypes') }})
    marketplace_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MarketplaceUrl') }})
    product_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductName') }})
    product_subscription_resource_policy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductSubscriptionResourcePolicy') }})
    

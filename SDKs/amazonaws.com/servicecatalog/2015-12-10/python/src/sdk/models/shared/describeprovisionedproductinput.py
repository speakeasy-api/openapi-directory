import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DescribeProvisionedProductInput:
    r"""DescribeProvisionedProductInput
    DescribeProvisionedProductAPI input structure. AcceptLanguage - [Optional] The language code for localization. Id - [Optional] The provisioned product identifier. Name - [Optional] Another provisioned product identifier. Customers must provide either Id or Name.
    """
    
    accept_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    

import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subsctiptiontype_apppkg_enum as shared_subsctiptiontype_apppkg_enum


@dataclass_json
@dataclasses.dataclass
class SubscriptionsAppPkgSubscription:
    r"""SubscriptionsAppPkgSubscription
    'The data type represents the input parameters of \"subscription operation\" to notification of application package management for the onboarding, or operational state change of application package.'
    """
    
    href: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    subsctiption_type: shared_subsctiptiontype_apppkg_enum.SubsctiptionTypeAppPkgEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subsctiptionType') }})
    

import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import savingsplanofferingratefilterelement as shared_savingsplanofferingratefilterelement
from ..shared import savingsplanproducttype_enum as shared_savingsplanproducttype_enum
from ..shared import savingsplanpaymentoption_enum as shared_savingsplanpaymentoption_enum
from ..shared import savingsplantype_enum as shared_savingsplantype_enum
from ..shared import savingsplanrateservicecode_enum as shared_savingsplanrateservicecode_enum
from ..shared import describesavingsplansofferingratesresponse as shared_describesavingsplansofferingratesresponse


@dataclasses.dataclass
class DescribeSavingsPlansOfferingRatesHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DescribeSavingsPlansOfferingRatesRequestBody:
    filters: Optional[list[shared_savingsplanofferingratefilterelement.SavingsPlanOfferingRateFilterElement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    operations: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    products: Optional[list[shared_savingsplanproducttype_enum.SavingsPlanProductTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    savings_plan_offering_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savingsPlanOfferingIds') }})
    savings_plan_payment_options: Optional[list[shared_savingsplanpaymentoption_enum.SavingsPlanPaymentOptionEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savingsPlanPaymentOptions') }})
    savings_plan_types: Optional[list[shared_savingsplantype_enum.SavingsPlanTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savingsPlanTypes') }})
    service_codes: Optional[list[shared_savingsplanrateservicecode_enum.SavingsPlanRateServiceCodeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceCodes') }})
    usage_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageTypes') }})
    

@dataclasses.dataclass
class DescribeSavingsPlansOfferingRatesRequest:
    headers: DescribeSavingsPlansOfferingRatesHeaders = dataclasses.field()
    request: DescribeSavingsPlansOfferingRatesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeSavingsPlansOfferingRatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_savings_plans_offering_rates_response: Optional[shared_describesavingsplansofferingratesresponse.DescribeSavingsPlansOfferingRatesResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    

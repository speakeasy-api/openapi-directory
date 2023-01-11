import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import currencycode_enum as shared_currencycode_enum
from ..shared import savingsplanofferingfilterelement as shared_savingsplanofferingfilterelement
from ..shared import savingsplanpaymentoption_enum as shared_savingsplanpaymentoption_enum
from ..shared import savingsplantype_enum as shared_savingsplantype_enum
from ..shared import describesavingsplansofferingsresponse as shared_describesavingsplansofferingsresponse


@dataclasses.dataclass
class DescribeSavingsPlansOfferingsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum(str, Enum):
    EC2 = "EC2"
    FARGATE = "Fargate"
    LAMBDA = "Lambda"
    SAGE_MAKER = "SageMaker"


@dataclass_json
@dataclasses.dataclass
class DescribeSavingsPlansOfferingsRequestBody:
    currencies: Optional[list[shared_currencycode_enum.CurrencyCodeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencies') }})
    descriptions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptions') }})
    durations: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durations') }})
    filters: Optional[list[shared_savingsplanofferingfilterelement.SavingsPlanOfferingFilterElement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    offering_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offeringIds') }})
    operations: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    payment_options: Optional[list[shared_savingsplanpaymentoption_enum.SavingsPlanPaymentOptionEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentOptions') }})
    plan_types: Optional[list[shared_savingsplantype_enum.SavingsPlanTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('planTypes') }})
    product_type: Optional[DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productType') }})
    service_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceCodes') }})
    usage_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageTypes') }})
    

@dataclasses.dataclass
class DescribeSavingsPlansOfferingsRequest:
    headers: DescribeSavingsPlansOfferingsHeaders = dataclasses.field()
    request: DescribeSavingsPlansOfferingsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeSavingsPlansOfferingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_savings_plans_offerings_response: Optional[shared_describesavingsplansofferingsresponse.DescribeSavingsPlansOfferingsResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    

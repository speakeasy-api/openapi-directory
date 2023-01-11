import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetReservedInstancesExchangeQuoteResultReservedInstanceValueRollup:
    r"""GetReservedInstancesExchangeQuoteResultReservedInstanceValueRollup
    The cost associated with the Reserved Instance.
    """
    
    hourly_price: Optional[dict[str, Any]] = dataclasses.field(default=None)
    remaining_total_value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    remaining_upfront_value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class GetReservedInstancesExchangeQuoteResultTargetConfigurationValueRollup:
    r"""GetReservedInstancesExchangeQuoteResultTargetConfigurationValueRollup
    The cost associated with the Reserved Instance.
    """
    
    hourly_price: Optional[dict[str, Any]] = dataclasses.field(default=None)
    remaining_total_value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    remaining_upfront_value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class GetReservedInstancesExchangeQuoteResult:
    r"""GetReservedInstancesExchangeQuoteResult
    Contains the output of GetReservedInstancesExchangeQuote.
    """
    
    currency_code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    is_valid_exchange: Optional[dict[str, Any]] = dataclasses.field(default=None)
    output_reserved_instances_will_expire_at: Optional[dict[str, Any]] = dataclasses.field(default=None)
    payment_due: Optional[dict[str, Any]] = dataclasses.field(default=None)
    reserved_instance_value_rollup: Optional[GetReservedInstancesExchangeQuoteResultReservedInstanceValueRollup] = dataclasses.field(default=None)
    reserved_instance_value_set: Optional[dict[str, Any]] = dataclasses.field(default=None)
    target_configuration_value_rollup: Optional[GetReservedInstancesExchangeQuoteResultTargetConfigurationValueRollup] = dataclasses.field(default=None)
    target_configuration_value_set: Optional[dict[str, Any]] = dataclasses.field(default=None)
    validation_failure_reason: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

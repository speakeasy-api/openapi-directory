import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The cost associated with the Reserved Instance.
**/
export declare class GetReservedInstancesExchangeQuoteResultReservedInstanceValueRollup extends SpeakeasyBase {
    hourlyPrice?: Record<string, any>;
    remainingTotalValue?: Record<string, any>;
    remainingUpfrontValue?: Record<string, any>;
}
/**
 * The cost associated with the Reserved Instance.
**/
export declare class GetReservedInstancesExchangeQuoteResultTargetConfigurationValueRollup extends SpeakeasyBase {
    hourlyPrice?: Record<string, any>;
    remainingTotalValue?: Record<string, any>;
    remainingUpfrontValue?: Record<string, any>;
}
/**
 * Contains the output of GetReservedInstancesExchangeQuote.
**/
export declare class GetReservedInstancesExchangeQuoteResult extends SpeakeasyBase {
    currencyCode?: Record<string, any>;
    isValidExchange?: Record<string, any>;
    outputReservedInstancesWillExpireAt?: Record<string, any>;
    paymentDue?: Record<string, any>;
    reservedInstanceValueRollup?: GetReservedInstancesExchangeQuoteResultReservedInstanceValueRollup;
    reservedInstanceValueSet?: Record<string, any>;
    targetConfigurationValueRollup?: GetReservedInstancesExchangeQuoteResultTargetConfigurationValueRollup;
    targetConfigurationValueSet?: Record<string, any>;
    validationFailureReason?: Record<string, any>;
}

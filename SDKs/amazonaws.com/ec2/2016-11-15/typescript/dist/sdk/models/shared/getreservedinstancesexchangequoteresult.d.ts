import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The cost associated with the Reserved Instance.
 */
export declare class GetReservedInstancesExchangeQuoteResultReservedInstanceValueRollup extends SpeakeasyBase {
    hourlyPrice?: string;
    remainingTotalValue?: string;
    remainingUpfrontValue?: string;
}
/**
 * The total value of the Convertible Reserved Instance that you are exchanging.
 */
export declare class GetReservedInstancesExchangeQuoteResultReservedInstanceValueSetReservationValue extends SpeakeasyBase {
    hourlyPrice?: string;
    remainingTotalValue?: string;
    remainingUpfrontValue?: string;
}
/**
 * The total value of the Convertible Reserved Instance.
 */
export declare class GetReservedInstancesExchangeQuoteResultReservedInstanceValueSet extends SpeakeasyBase {
    reservationValue?: GetReservedInstancesExchangeQuoteResultReservedInstanceValueSetReservationValue;
    reservedInstanceId?: string;
}
/**
 * The cost associated with the Reserved Instance.
 */
export declare class GetReservedInstancesExchangeQuoteResultTargetConfigurationValueRollup extends SpeakeasyBase {
    hourlyPrice?: string;
    remainingTotalValue?: string;
    remainingUpfrontValue?: string;
}
/**
 * The total value of the Convertible Reserved Instances that make up the exchange. This is the sum of the list value, remaining upfront price, and additional upfront cost of the exchange.
 */
export declare class GetReservedInstancesExchangeQuoteResultTargetConfigurationValueSetReservationValue extends SpeakeasyBase {
    hourlyPrice?: string;
    remainingTotalValue?: string;
    remainingUpfrontValue?: string;
}
/**
 * The configuration of the Convertible Reserved Instances that make up the exchange.
 */
export declare class GetReservedInstancesExchangeQuoteResultTargetConfigurationValueSetTargetConfiguration extends SpeakeasyBase {
    instanceCount?: number;
    offeringId?: string;
}
/**
 * The total value of the new Convertible Reserved Instances.
 */
export declare class GetReservedInstancesExchangeQuoteResultTargetConfigurationValueSet extends SpeakeasyBase {
    reservationValue?: GetReservedInstancesExchangeQuoteResultTargetConfigurationValueSetReservationValue;
    targetConfiguration?: GetReservedInstancesExchangeQuoteResultTargetConfigurationValueSetTargetConfiguration;
}
/**
 * Contains the output of GetReservedInstancesExchangeQuote.
 */
export declare class GetReservedInstancesExchangeQuoteResult extends SpeakeasyBase {
    currencyCode?: string;
    isValidExchange?: boolean;
    outputReservedInstancesWillExpireAt?: Date;
    paymentDue?: string;
    reservedInstanceValueRollup?: GetReservedInstancesExchangeQuoteResultReservedInstanceValueRollup;
    reservedInstanceValueSet?: GetReservedInstancesExchangeQuoteResultReservedInstanceValueSet[];
    targetConfigurationValueRollup?: GetReservedInstancesExchangeQuoteResultTargetConfigurationValueRollup;
    targetConfigurationValueSet?: GetReservedInstancesExchangeQuoteResultTargetConfigurationValueSet[];
    validationFailureReason?: string;
}

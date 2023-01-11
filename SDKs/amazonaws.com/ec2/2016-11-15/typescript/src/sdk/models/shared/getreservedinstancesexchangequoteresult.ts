import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetReservedInstancesExchangeQuoteResultReservedInstanceValueRollup
/** 
 * The cost associated with the Reserved Instance.
**/
export class GetReservedInstancesExchangeQuoteResultReservedInstanceValueRollup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hourlyPrice?: Record<string, any>;

  @SpeakeasyMetadata()
  remainingTotalValue?: Record<string, any>;

  @SpeakeasyMetadata()
  remainingUpfrontValue?: Record<string, any>;
}


// GetReservedInstancesExchangeQuoteResultTargetConfigurationValueRollup
/** 
 * The cost associated with the Reserved Instance.
**/
export class GetReservedInstancesExchangeQuoteResultTargetConfigurationValueRollup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hourlyPrice?: Record<string, any>;

  @SpeakeasyMetadata()
  remainingTotalValue?: Record<string, any>;

  @SpeakeasyMetadata()
  remainingUpfrontValue?: Record<string, any>;
}


// GetReservedInstancesExchangeQuoteResult
/** 
 * Contains the output of GetReservedInstancesExchangeQuote.
**/
export class GetReservedInstancesExchangeQuoteResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currencyCode?: Record<string, any>;

  @SpeakeasyMetadata()
  isValidExchange?: Record<string, any>;

  @SpeakeasyMetadata()
  outputReservedInstancesWillExpireAt?: Record<string, any>;

  @SpeakeasyMetadata()
  paymentDue?: Record<string, any>;

  @SpeakeasyMetadata()
  reservedInstanceValueRollup?: GetReservedInstancesExchangeQuoteResultReservedInstanceValueRollup;

  @SpeakeasyMetadata()
  reservedInstanceValueSet?: Record<string, any>;

  @SpeakeasyMetadata()
  targetConfigurationValueRollup?: GetReservedInstancesExchangeQuoteResultTargetConfigurationValueRollup;

  @SpeakeasyMetadata()
  targetConfigurationValueSet?: Record<string, any>;

  @SpeakeasyMetadata()
  validationFailureReason?: Record<string, any>;
}

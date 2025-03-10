/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * GetReservedInstancesExchangeQuoteResultReservedInstanceValueSetReservationValue - The total value of the Convertible Reserved Instance that you are exchanging.
 */
public class GetReservedInstancesExchangeQuoteResultReservedInstanceValueSetReservationValue {
    
    public String hourlyPrice;

    public GetReservedInstancesExchangeQuoteResultReservedInstanceValueSetReservationValue withHourlyPrice(String hourlyPrice) {
        this.hourlyPrice = hourlyPrice;
        return this;
    }
    
    
    public String remainingTotalValue;

    public GetReservedInstancesExchangeQuoteResultReservedInstanceValueSetReservationValue withRemainingTotalValue(String remainingTotalValue) {
        this.remainingTotalValue = remainingTotalValue;
        return this;
    }
    
    
    public String remainingUpfrontValue;

    public GetReservedInstancesExchangeQuoteResultReservedInstanceValueSetReservationValue withRemainingUpfrontValue(String remainingUpfrontValue) {
        this.remainingUpfrontValue = remainingUpfrontValue;
        return this;
    }
    
    public GetReservedInstancesExchangeQuoteResultReservedInstanceValueSetReservationValue(){}
}

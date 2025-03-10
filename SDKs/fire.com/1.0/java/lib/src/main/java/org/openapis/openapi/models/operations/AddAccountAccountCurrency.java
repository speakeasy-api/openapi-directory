/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AddAccountAccountCurrency - The currency.
 */
public class AddAccountAccountCurrency {
    /**
     * The three letter code for the currency - either `EUR` or `GBP`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public AddAccountAccountCurrencyCodeEnum code;

    public AddAccountAccountCurrency withCode(AddAccountAccountCurrencyCodeEnum code) {
        this.code = code;
        return this;
    }
    
    /**
     * The name of the currency
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public AddAccountAccountCurrency withDescription(String description) {
        this.description = description;
        return this;
    }
    
    public AddAccountAccountCurrency(){}
}

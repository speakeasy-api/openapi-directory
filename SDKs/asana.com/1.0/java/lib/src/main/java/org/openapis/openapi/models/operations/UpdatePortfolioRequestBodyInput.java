/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdatePortfolioRequestBodyInput - The updated fields for the portfolio.
 */
public class UpdatePortfolioRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public org.openapis.openapi.models.shared.PortfolioRequestInput data;

    public UpdatePortfolioRequestBodyInput withData(org.openapis.openapi.models.shared.PortfolioRequestInput data) {
        this.data = data;
        return this;
    }
    
    public UpdatePortfolioRequestBodyInput(){}
}

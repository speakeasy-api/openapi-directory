/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeSavingsPlansOfferingRatesResponse - Success
 */
public class DescribeSavingsPlansOfferingRatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;

    public DescribeSavingsPlansOfferingRatesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchResults")
    public SavingsPlanOfferingRate[] searchResults;

    public DescribeSavingsPlansOfferingRatesResponse withSearchResults(SavingsPlanOfferingRate[] searchResults) {
        this.searchResults = searchResults;
        return this;
    }
    
    public DescribeSavingsPlansOfferingRatesResponse(){}
}

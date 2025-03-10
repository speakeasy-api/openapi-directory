/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetTermsOfServiceAcceptanceInfosResponse - OK - the request has succeeded.
 */
public class GetTermsOfServiceAcceptanceInfosResponse {
    /**
     * The Terms of Service acceptance information.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public TermsOfServiceAcceptanceInfo[] data;

    public GetTermsOfServiceAcceptanceInfosResponse withData(TermsOfServiceAcceptanceInfo[] data) {
        this.data = data;
        return this;
    }
    
    public GetTermsOfServiceAcceptanceInfosResponse(){}
}

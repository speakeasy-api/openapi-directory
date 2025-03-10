/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CustomerAgreement - The name and status of a customer agreement. 
 */
public class CustomerAgreement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agreementName")
    public String agreementName;

    public CustomerAgreement withAgreementName(String agreementName) {
        this.agreementName = agreementName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;

    public CustomerAgreement withStatus(String status) {
        this.status = status;
        return this;
    }
    
    public CustomerAgreement(){}
}

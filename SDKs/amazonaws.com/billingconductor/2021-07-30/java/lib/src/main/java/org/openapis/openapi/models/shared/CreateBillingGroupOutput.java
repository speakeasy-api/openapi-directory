/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateBillingGroupOutput - Success
 */
public class CreateBillingGroupOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;

    public CreateBillingGroupOutput withArn(String arn) {
        this.arn = arn;
        return this;
    }
    
    public CreateBillingGroupOutput(){}
}

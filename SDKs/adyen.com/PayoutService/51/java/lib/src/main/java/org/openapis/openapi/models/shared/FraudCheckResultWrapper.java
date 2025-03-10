/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class FraudCheckResultWrapper {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FraudCheckResult")
    public FraudCheckResult fraudCheckResult;

    public FraudCheckResultWrapper withFraudCheckResult(FraudCheckResult fraudCheckResult) {
        this.fraudCheckResult = fraudCheckResult;
        return this;
    }
    
    public FraudCheckResultWrapper(){}
}

/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CostEstimateAssumptions {
    /**
     * If true, the cardholder is expected to successfully authorise via 3D Secure.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assume3DSecureAuthenticated")
    public Boolean assume3DSecureAuthenticated;

    public CostEstimateAssumptions withAssume3DSecureAuthenticated(Boolean assume3DSecureAuthenticated) {
        this.assume3DSecureAuthenticated = assume3DSecureAuthenticated;
        return this;
    }
    
    /**
     * If true, the transaction is expected to have valid Level 3 data.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assumeLevel3Data")
    public Boolean assumeLevel3Data;

    public CostEstimateAssumptions withAssumeLevel3Data(Boolean assumeLevel3Data) {
        this.assumeLevel3Data = assumeLevel3Data;
        return this;
    }
    
    /**
     * If not zero, the number of installments.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installments")
    public Integer installments;

    public CostEstimateAssumptions withInstallments(Integer installments) {
        this.installments = installments;
        return this;
    }
    
    public CostEstimateAssumptions(){}
}

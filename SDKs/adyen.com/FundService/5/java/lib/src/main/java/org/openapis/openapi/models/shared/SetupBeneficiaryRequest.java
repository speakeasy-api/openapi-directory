/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class SetupBeneficiaryRequest {
    /**
     * The destination account code.
     */
    @JsonProperty("destinationAccountCode")
    public String destinationAccountCode;

    public SetupBeneficiaryRequest withDestinationAccountCode(String destinationAccountCode) {
        this.destinationAccountCode = destinationAccountCode;
        return this;
    }
    
    /**
     * A value that can be supplied at the discretion of the executing user.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantReference")
    public String merchantReference;

    public SetupBeneficiaryRequest withMerchantReference(String merchantReference) {
        this.merchantReference = merchantReference;
        return this;
    }
    
    /**
     * The benefactor account.
     */
    @JsonProperty("sourceAccountCode")
    public String sourceAccountCode;

    public SetupBeneficiaryRequest withSourceAccountCode(String sourceAccountCode) {
        this.sourceAccountCode = sourceAccountCode;
        return this;
    }
    
    public SetupBeneficiaryRequest(@JsonProperty("destinationAccountCode") String destinationAccountCode, @JsonProperty("sourceAccountCode") String sourceAccountCode) {
        this.destinationAccountCode = destinationAccountCode;
        this.sourceAccountCode = sourceAccountCode;
  }
}

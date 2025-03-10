/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StartTransactionResult - Contains the details of the started transaction.
 */
public class StartTransactionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimingInformation")
    public TimingInformation timingInformation;

    public StartTransactionResult withTimingInformation(TimingInformation timingInformation) {
        this.timingInformation = timingInformation;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransactionId")
    public String transactionId;

    public StartTransactionResult withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
    
    public StartTransactionResult(){}
}

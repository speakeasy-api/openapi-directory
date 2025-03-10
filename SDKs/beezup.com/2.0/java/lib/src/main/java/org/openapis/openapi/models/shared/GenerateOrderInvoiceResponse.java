/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GenerateOrderInvoiceResponse {
    /**
     * Marketplace Account Identifier
     */
    @JsonProperty("accountId")
    public Long accountId;

    public GenerateOrderInvoiceResponse withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    
    /**
     * beezUPOrderUUID
     */
    @JsonProperty("beezUPOrderUUID")
    public String beezUPOrderUUID;

    public GenerateOrderInvoiceResponse withBeezUPOrderUUID(String beezUPOrderUUID) {
        this.beezUPOrderUUID = beezUPOrderUUID;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceLocation")
    public String invoiceLocation;

    public GenerateOrderInvoiceResponse withInvoiceLocation(String invoiceLocation) {
        this.invoiceLocation = invoiceLocation;
        return this;
    }
    
    /**
     * Invoice Sequence Number
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceSequenceNumber")
    public Long invoiceSequenceNumber;

    public GenerateOrderInvoiceResponse withInvoiceSequenceNumber(Long invoiceSequenceNumber) {
        this.invoiceSequenceNumber = invoiceSequenceNumber;
        return this;
    }
    
    /**
     * Marketplace Technical Code
     */
    @JsonProperty("marketplaceTechnicalCode")
    public String marketplaceTechnicalCode;

    public GenerateOrderInvoiceResponse withMarketplaceTechnicalCode(String marketplaceTechnicalCode) {
        this.marketplaceTechnicalCode = marketplaceTechnicalCode;
        return this;
    }
    
    public GenerateOrderInvoiceResponse(@JsonProperty("accountId") Long accountId, @JsonProperty("beezUPOrderUUID") String beezUPOrderUUID, @JsonProperty("marketplaceTechnicalCode") String marketplaceTechnicalCode) {
        this.accountId = accountId;
        this.beezUPOrderUUID = beezUPOrderUUID;
        this.marketplaceTechnicalCode = marketplaceTechnicalCode;
  }
}

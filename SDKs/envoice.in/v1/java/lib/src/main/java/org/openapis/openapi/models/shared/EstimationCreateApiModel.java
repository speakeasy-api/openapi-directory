/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class EstimationCreateApiModel {
    /**
     * List of estimation attachments
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attachments")
    @SpeakeasyMetadata("form:name=Attachments,json")
    public EstimationCreateAttachmentApiModel[] attachments;

    public EstimationCreateApiModel withAttachments(EstimationCreateAttachmentApiModel[] attachments) {
        this.attachments = attachments;
        return this;
    }
    
    /**
     * The client to whom this estimation is assigned
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientId")
    @SpeakeasyMetadata("form:name=ClientId")
    public Integer clientId;

    public EstimationCreateApiModel withClientId(Integer clientId) {
        this.clientId = clientId;
        return this;
    }
    
    /**
     * Indicate from which estimation this estimation has been cloned from
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClonedFromId")
    @SpeakeasyMetadata("form:name=ClonedFromId")
    public Integer clonedFromId;

    public EstimationCreateApiModel withClonedFromId(Integer clonedFromId) {
        this.clonedFromId = clonedFromId;
        return this;
    }
    
    /**
     * Id of the currency for the estimation amounts
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrencyId")
    @SpeakeasyMetadata("form:name=CurrencyId")
    public Integer currencyId;

    public EstimationCreateApiModel withCurrencyId(Integer currencyId) {
        this.currencyId = currencyId;
        return this;
    }
    
    /**
     * Indicates when the estimation will be proclamed as due
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("ExpiresOn")
    @SpeakeasyMetadata("form:name=ExpiresOn")
    public OffsetDateTime expiresOn;

    public EstimationCreateApiModel withExpiresOn(OffsetDateTime expiresOn) {
        this.expiresOn = expiresOn;
        return this;
    }
    
    /**
     * Indicates when the estimation was issued
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("IssuedOn")
    @SpeakeasyMetadata("form:name=IssuedOn")
    public OffsetDateTime issuedOn;

    public EstimationCreateApiModel withIssuedOn(OffsetDateTime issuedOn) {
        this.issuedOn = issuedOn;
        return this;
    }
    
    /**
     * List of estimation items
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Items")
    @SpeakeasyMetadata("form:name=Items,json")
    public EstimationCreateItemApiModel[] items;

    public EstimationCreateApiModel withItems(EstimationCreateItemApiModel[] items) {
        this.items = items;
        return this;
    }
    
    /**
     * Internal note regarding the estimation
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notes")
    @SpeakeasyMetadata("form:name=Notes")
    public String notes;

    public EstimationCreateApiModel withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    
    /**
     * Unique estimation number
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Number")
    @SpeakeasyMetadata("form:name=Number")
    public String number;

    public EstimationCreateApiModel withNumber(String number) {
        this.number = number;
        return this;
    }
    
    /**
     * List of enabled payment gateways for this estimation
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentGateways")
    @SpeakeasyMetadata("form:name=PaymentGateways,json")
    public EstimationGatewayApiModel[] paymentGateways;

    public EstimationCreateApiModel withPaymentGateways(EstimationGatewayApiModel[] paymentGateways) {
        this.paymentGateways = paymentGateways;
        return this;
    }
    
    /**
     * Unique number generated by the buyer
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PoNumber")
    @SpeakeasyMetadata("form:name=PoNumber")
    public String poNumber;

    public EstimationCreateApiModel withPoNumber(String poNumber) {
        this.poNumber = poNumber;
        return this;
    }
    
    /**
     * Indicate the status of the estimation (paid/unpaid/overdue)
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    @SpeakeasyMetadata("form:name=Status")
    public EstimationCreateApiModelStatusEnum status;

    public EstimationCreateApiModel withStatus(EstimationCreateApiModelStatusEnum status) {
        this.status = status;
        return this;
    }
    
    /**
     * Terms of agreement
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Terms")
    @SpeakeasyMetadata("form:name=Terms")
    public String terms;

    public EstimationCreateApiModel withTerms(String terms) {
        this.terms = terms;
        return this;
    }
    
    public EstimationCreateApiModel(){}
}

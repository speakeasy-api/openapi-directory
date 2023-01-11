package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ReceiptRecognitionResult
 * Result of recognizing a receipt, to extract the key information from the receipt
**/
public class ReceiptRecognitionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AddressString")
    public String addressString;
    public ReceiptRecognitionResult withAddressString(String addressString) {
        this.addressString = addressString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BusinessName")
    public String businessName;
    public ReceiptRecognitionResult withBusinessName(String businessName) {
        this.businessName = businessName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BusinessWebsite")
    public String businessWebsite;
    public ReceiptRecognitionResult withBusinessWebsite(String businessWebsite) {
        this.businessWebsite = businessWebsite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PhoneNumber")
    public String phoneNumber;
    public ReceiptRecognitionResult withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReceiptItems")
    public ReceiptLineItem[] receiptItems;
    public ReceiptRecognitionResult withReceiptItems(ReceiptLineItem[] receiptItems) {
        this.receiptItems = receiptItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReceiptSubTotal")
    public Double receiptSubTotal;
    public ReceiptRecognitionResult withReceiptSubTotal(Double receiptSubTotal) {
        this.receiptSubTotal = receiptSubTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReceiptTotal")
    public Double receiptTotal;
    public ReceiptRecognitionResult withReceiptTotal(Double receiptTotal) {
        this.receiptTotal = receiptTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Successful")
    public Boolean successful;
    public ReceiptRecognitionResult withSuccessful(Boolean successful) {
        this.successful = successful;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Timestamp")
    public OffsetDateTime timestamp;
    public ReceiptRecognitionResult withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}
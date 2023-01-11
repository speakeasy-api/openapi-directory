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
 * Receipt
 * Records events during an engagement.
**/
public class Receipt {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContactChannelArn")
    public String contactChannelArn;
    public Receipt withContactChannelArn(String contactChannelArn) {
        this.contactChannelArn = contactChannelArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReceiptInfo")
    public String receiptInfo;
    public Receipt withReceiptInfo(String receiptInfo) {
        this.receiptInfo = receiptInfo;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("ReceiptTime")
    public OffsetDateTime receiptTime;
    public Receipt withReceiptTime(OffsetDateTime receiptTime) {
        this.receiptTime = receiptTime;
        return this;
    }
    @JsonProperty("ReceiptType")
    public ReceiptTypeEnum receiptType;
    public Receipt withReceiptType(ReceiptTypeEnum receiptType) {
        this.receiptType = receiptType;
        return this;
    }
}
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
 * TransferData
 * Data used to transfer a certificate to an Amazon Web Services account.
**/
public class TransferData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("acceptDate")
    public OffsetDateTime acceptDate;
    public TransferData withAcceptDate(OffsetDateTime acceptDate) {
        this.acceptDate = acceptDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("rejectDate")
    public OffsetDateTime rejectDate;
    public TransferData withRejectDate(OffsetDateTime rejectDate) {
        this.rejectDate = rejectDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rejectReason")
    public String rejectReason;
    public TransferData withRejectReason(String rejectReason) {
        this.rejectReason = rejectReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("transferDate")
    public OffsetDateTime transferDate;
    public TransferData withTransferDate(OffsetDateTime transferDate) {
        this.transferDate = transferDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferMessage")
    public String transferMessage;
    public TransferData withTransferMessage(String transferMessage) {
        this.transferMessage = transferMessage;
        return this;
    }
}
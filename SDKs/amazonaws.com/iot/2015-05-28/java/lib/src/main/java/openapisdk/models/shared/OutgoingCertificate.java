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
 * OutgoingCertificate
 * A certificate that has been transferred but not yet accepted.
**/
public class OutgoingCertificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateArn")
    public String certificateArn;
    public OutgoingCertificate withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateId")
    public String certificateId;
    public OutgoingCertificate withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public OutgoingCertificate withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("transferDate")
    public OffsetDateTime transferDate;
    public OutgoingCertificate withTransferDate(OffsetDateTime transferDate) {
        this.transferDate = transferDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferMessage")
    public String transferMessage;
    public OutgoingCertificate withTransferMessage(String transferMessage) {
        this.transferMessage = transferMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferredTo")
    public String transferredTo;
    public OutgoingCertificate withTransferredTo(String transferredTo) {
        this.transferredTo = transferredTo;
        return this;
    }
}
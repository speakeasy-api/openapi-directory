package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateNewCardNewCardResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardId")
    public Long cardId;
    public CreateNewCardNewCardResponse withCardId(Long cardId) {
        this.cardId = cardId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expiryDate")
    public OffsetDateTime expiryDate;
    public CreateNewCardNewCardResponse withExpiryDate(OffsetDateTime expiryDate) {
        this.expiryDate = expiryDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maskedPan")
    public String maskedPan;
    public CreateNewCardNewCardResponse withMaskedPan(String maskedPan) {
        this.maskedPan = maskedPan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CreateNewCardNewCardResponseStatusEnum status;
    public CreateNewCardNewCardResponse withStatus(CreateNewCardNewCardResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}
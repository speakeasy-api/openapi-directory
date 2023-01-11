package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetListofCardsCardsCard {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blocked")
    public Boolean blocked;
    public GetListofCardsCardsCard withBlocked(Boolean blocked) {
        this.blocked = blocked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardId")
    public Long cardId;
    public GetListofCardsCardsCard withCardId(Long cardId) {
        this.cardId = cardId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dateCreated")
    public OffsetDateTime dateCreated;
    public GetListofCardsCardsCard withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailAddress")
    public String emailAddress;
    public GetListofCardsCardsCard withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eurIcan")
    public Long eurIcan;
    public GetListofCardsCardsCard withEurIcan(Long eurIcan) {
        this.eurIcan = eurIcan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expiryDate")
    public OffsetDateTime expiryDate;
    public GetListofCardsCardsCard withExpiryDate(OffsetDateTime expiryDate) {
        this.expiryDate = expiryDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public GetListofCardsCardsCard withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gbpIcan")
    public Long gbpIcan;
    public GetListofCardsCardsCard withGbpIcan(Long gbpIcan) {
        this.gbpIcan = gbpIcan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public GetListofCardsCardsCard withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maskedPan")
    public String maskedPan;
    public GetListofCardsCardsCard withMaskedPan(String maskedPan) {
        this.maskedPan = maskedPan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public GetListofCardsCardsCardProviderEnum provider;
    public GetListofCardsCardsCard withProvider(GetListofCardsCardsCardProviderEnum provider) {
        this.provider = provider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetListofCardsCardsCardStatusEnum status;
    public GetListofCardsCardsCard withStatus(GetListofCardsCardsCardStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusReason")
    public GetListofCardsCardsCardStatusReasonEnum statusReason;
    public GetListofCardsCardsCard withStatusReason(GetListofCardsCardsCardStatusReasonEnum statusReason) {
        this.statusReason = statusReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public Long userId;
    public GetListofCardsCardsCard withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}
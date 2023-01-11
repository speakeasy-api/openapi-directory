package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetTransactionsByIdTransactionRelatedCard {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alias")
    public String alias;
    public GetTransactionsByIdTransactionRelatedCard withAlias(String alias) {
        this.alias = alias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardId")
    public Double cardId;
    public GetTransactionsByIdTransactionRelatedCard withCardId(Double cardId) {
        this.cardId = cardId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embossBusinessName")
    public String embossBusinessName;
    public GetTransactionsByIdTransactionRelatedCard withEmbossBusinessName(String embossBusinessName) {
        this.embossBusinessName = embossBusinessName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embossCardName")
    public String embossCardName;
    public GetTransactionsByIdTransactionRelatedCard withEmbossCardName(String embossCardName) {
        this.embossCardName = embossCardName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expiryDate")
    public OffsetDateTime expiryDate;
    public GetTransactionsByIdTransactionRelatedCard withExpiryDate(OffsetDateTime expiryDate) {
        this.expiryDate = expiryDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maskedPan")
    public String maskedPan;
    public GetTransactionsByIdTransactionRelatedCard withMaskedPan(String maskedPan) {
        this.maskedPan = maskedPan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public String provider;
    public GetTransactionsByIdTransactionRelatedCard withProvider(String provider) {
        this.provider = provider;
        return this;
    }
}
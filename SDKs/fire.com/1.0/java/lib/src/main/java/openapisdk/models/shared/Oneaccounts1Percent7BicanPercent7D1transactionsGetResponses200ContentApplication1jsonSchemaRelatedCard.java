package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alias")
    public String alias;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard withAlias(String alias) {
        this.alias = alias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardId")
    public Double cardId;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard withCardId(Double cardId) {
        this.cardId = cardId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embossBusinessName")
    public String embossBusinessName;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard withEmbossBusinessName(String embossBusinessName) {
        this.embossBusinessName = embossBusinessName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embossCardName")
    public String embossCardName;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard withEmbossCardName(String embossCardName) {
        this.embossCardName = embossCardName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expiryDate")
    public OffsetDateTime expiryDate;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard withExpiryDate(OffsetDateTime expiryDate) {
        this.expiryDate = expiryDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maskedPan")
    public String maskedPan;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard withMaskedPan(String maskedPan) {
        this.maskedPan = maskedPan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public String provider;
    public Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchemaRelatedCard withProvider(String provider) {
        this.provider = provider;
        return this;
    }
}
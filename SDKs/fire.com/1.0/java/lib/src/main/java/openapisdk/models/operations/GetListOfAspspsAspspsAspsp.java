package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetListOfAspspsAspspsAspsp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alias")
    public String alias;
    public GetListOfAspspsAspspsAspsp withAlias(String alias) {
        this.alias = alias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aspspUuid")
    public String aspspUuid;
    public GetListOfAspspsAspspsAspsp withAspspUuid(String aspspUuid) {
        this.aspspUuid = aspspUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public GetListOfAspspsAspspsAspspCountry country;
    public GetListOfAspspsAspspsAspsp withCountry(GetListOfAspspsAspspsAspspCountry country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public openapisdk.models.shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency currency;
    public GetListOfAspspsAspspsAspsp withCurrency(openapisdk.models.shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dateCreated")
    public OffsetDateTime dateCreated;
    public GetListOfAspspsAspspsAspsp withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdated")
    public OffsetDateTime lastUpdated;
    public GetListOfAspspsAspspsAspsp withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logoUrl")
    public String logoUrl;
    public GetListOfAspspsAspspsAspsp withLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
        return this;
    }
}
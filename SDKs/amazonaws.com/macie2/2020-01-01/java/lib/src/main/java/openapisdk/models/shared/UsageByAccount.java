package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UsageByAccount
 * Provides data for a specific usage metric and the corresponding quota for an Amazon Macie account.
**/
public class UsageByAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public UsageByAccount withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimatedCost")
    public String estimatedCost;
    public UsageByAccount withEstimatedCost(String estimatedCost) {
        this.estimatedCost = estimatedCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceLimit")
    public ServiceLimit serviceLimit;
    public UsageByAccount withServiceLimit(ServiceLimit serviceLimit) {
        this.serviceLimit = serviceLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UsageTypeEnum type;
    public UsageByAccount withType(UsageTypeEnum type) {
        this.type = type;
        return this;
    }
}
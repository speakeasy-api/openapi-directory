package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AutomaticTransitionInfo {
    @JsonProperty("accountId")
    public Integer accountId;
    public AutomaticTransitionInfo withAccountId(Integer accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("beezUPOrderStatus")
    public String beezUPOrderStatus;
    public AutomaticTransitionInfo withBeezUpOrderStatus(String beezUPOrderStatus) {
        this.beezUPOrderStatus = beezUPOrderStatus;
        return this;
    }
    @JsonProperty("businessOperationType")
    public String businessOperationType;
    public AutomaticTransitionInfo withBusinessOperationType(String businessOperationType) {
        this.businessOperationType = businessOperationType;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public AutomaticTransitionInfo withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public AutomaticTransitionInfoLinks links;
    public AutomaticTransitionInfo withLinks(AutomaticTransitionInfoLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("marketplaceBusinessCode")
    public String marketplaceBusinessCode;
    public AutomaticTransitionInfo withMarketplaceBusinessCode(String marketplaceBusinessCode) {
        this.marketplaceBusinessCode = marketplaceBusinessCode;
        return this;
    }
    @JsonProperty("marketplaceTechnicalCode")
    public String marketplaceTechnicalCode;
    public AutomaticTransitionInfo withMarketplaceTechnicalCode(String marketplaceTechnicalCode) {
        this.marketplaceTechnicalCode = marketplaceTechnicalCode;
        return this;
    }
    @JsonProperty("orderStatusTransitionId")
    public Integer orderStatusTransitionId;
    public AutomaticTransitionInfo withOrderStatusTransitionId(Integer orderStatusTransitionId) {
        this.orderStatusTransitionId = orderStatusTransitionId;
        return this;
    }
}
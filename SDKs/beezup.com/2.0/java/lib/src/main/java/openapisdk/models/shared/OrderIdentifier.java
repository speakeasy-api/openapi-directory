package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OrderIdentifier {
    @JsonProperty("accountId")
    public Integer accountId;
    public OrderIdentifier withAccountId(Integer accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("beezUPOrderId")
    public String beezUPOrderId;
    public OrderIdentifier withBeezUpOrderId(String beezUPOrderId) {
        this.beezUPOrderId = beezUPOrderId;
        return this;
    }
    @JsonProperty("marketplaceTechnicalCode")
    public String marketplaceTechnicalCode;
    public OrderIdentifier withMarketplaceTechnicalCode(String marketplaceTechnicalCode) {
        this.marketplaceTechnicalCode = marketplaceTechnicalCode;
        return this;
    }
}
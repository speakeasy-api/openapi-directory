package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OrderIdentifierWithETag {
    @JsonProperty("accountId")
    public Integer accountId;
    public OrderIdentifierWithETag withAccountId(Integer accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonProperty("beezUPOrderId")
    public String beezUPOrderId;
    public OrderIdentifierWithETag withBeezUpOrderId(String beezUPOrderId) {
        this.beezUPOrderId = beezUPOrderId;
        return this;
    }
    @JsonProperty("etag")
    public String etag;
    public OrderIdentifierWithETag withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonProperty("marketplaceTechnicalCode")
    public String marketplaceTechnicalCode;
    public OrderIdentifierWithETag withMarketplaceTechnicalCode(String marketplaceTechnicalCode) {
        this.marketplaceTechnicalCode = marketplaceTechnicalCode;
        return this;
    }
}
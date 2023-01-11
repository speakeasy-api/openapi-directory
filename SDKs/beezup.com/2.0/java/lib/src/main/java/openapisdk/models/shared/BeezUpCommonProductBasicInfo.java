package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BeezUpCommonProductBasicInfo
 * The basic information related to a product
**/
public class BeezUpCommonProductBasicInfo {
    @JsonProperty("productExists")
    public Boolean productExists;
    public BeezUpCommonProductBasicInfo withProductExists(Boolean productExists) {
        this.productExists = productExists;
        return this;
    }
    @JsonProperty("productId")
    public String productId;
    public BeezUpCommonProductBasicInfo withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productImageUrl")
    public String productImageUrl;
    public BeezUpCommonProductBasicInfo withProductImageUrl(String productImageUrl) {
        this.productImageUrl = productImageUrl;
        return this;
    }
    @JsonProperty("productSku")
    public String productSku;
    public BeezUpCommonProductBasicInfo withProductSku(String productSku) {
        this.productSku = productSku;
        return this;
    }
    @JsonProperty("productTitle")
    public String productTitle;
    public BeezUpCommonProductBasicInfo withProductTitle(String productTitle) {
        this.productTitle = productTitle;
        return this;
    }
}
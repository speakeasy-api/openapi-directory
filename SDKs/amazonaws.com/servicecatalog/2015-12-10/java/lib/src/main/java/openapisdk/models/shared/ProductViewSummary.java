package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProductViewSummary
 * Summary information about a product view.
**/
public class ProductViewSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Distributor")
    public String distributor;
    public ProductViewSummary withDistributor(String distributor) {
        this.distributor = distributor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HasDefaultPath")
    public Boolean hasDefaultPath;
    public ProductViewSummary withHasDefaultPath(Boolean hasDefaultPath) {
        this.hasDefaultPath = hasDefaultPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ProductViewSummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ProductViewSummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Owner")
    public String owner;
    public ProductViewSummary withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductId")
    public String productId;
    public ProductViewSummary withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShortDescription")
    public String shortDescription;
    public ProductViewSummary withShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupportDescription")
    public String supportDescription;
    public ProductViewSummary withSupportDescription(String supportDescription) {
        this.supportDescription = supportDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupportEmail")
    public String supportEmail;
    public ProductViewSummary withSupportEmail(String supportEmail) {
        this.supportEmail = supportEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupportUrl")
    public String supportUrl;
    public ProductViewSummary withSupportUrl(String supportUrl) {
        this.supportUrl = supportUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public ProductTypeEnum type;
    public ProductViewSummary withType(ProductTypeEnum type) {
        this.type = type;
        return this;
    }
}
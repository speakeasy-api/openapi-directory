package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CopyOptimisationResponse
 * Products optimisatisation copied
**/
public class CopyOptimisationResponse {
    @JsonProperty("catalogProductCount")
    public Long catalogProductCount;
    public CopyOptimisationResponse withCatalogProductCount(Long catalogProductCount) {
        this.catalogProductCount = catalogProductCount;
        return this;
    }
    @JsonProperty("channel")
    public BeezUpCommonChannelBasicInfo channel;
    public CopyOptimisationResponse withChannel(BeezUpCommonChannelBasicInfo channel) {
        this.channel = channel;
        return this;
    }
    @JsonProperty("enabledProductCount")
    public Long enabledProductCount;
    public CopyOptimisationResponse withEnabledProductCount(Long enabledProductCount) {
        this.enabledProductCount = enabledProductCount;
        return this;
    }
}
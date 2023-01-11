package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCompatibleImagesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompatibleImages")
    public CompatibleImage[] compatibleImages;
    public ListCompatibleImagesResult withCompatibleImages(CompatibleImage[] compatibleImages) {
        this.compatibleImages = compatibleImages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListCompatibleImagesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}
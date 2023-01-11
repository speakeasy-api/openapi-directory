package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListImagesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageIds")
    public ImageIdentifier[] imageIds;
    public ListImagesResponse withImageIds(ImageIdentifier[] imageIds) {
        this.imageIds = imageIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListImagesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}
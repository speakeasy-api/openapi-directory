package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeImagesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageDetails")
    public ImageDetail[] imageDetails;
    public DescribeImagesResponse withImageDetails(ImageDetail[] imageDetails) {
        this.imageDetails = imageDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeImagesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}
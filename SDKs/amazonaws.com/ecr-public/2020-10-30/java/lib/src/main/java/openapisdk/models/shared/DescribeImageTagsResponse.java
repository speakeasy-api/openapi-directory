package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeImageTagsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageTagDetails")
    public ImageTagDetail[] imageTagDetails;
    public DescribeImageTagsResponse withImageTagDetails(ImageTagDetail[] imageTagDetails) {
        this.imageTagDetails = imageTagDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeImageTagsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}
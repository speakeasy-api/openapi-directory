package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeImagesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Images")
    public Image[] images;
    public DescribeImagesResult withImages(Image[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeImagesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}
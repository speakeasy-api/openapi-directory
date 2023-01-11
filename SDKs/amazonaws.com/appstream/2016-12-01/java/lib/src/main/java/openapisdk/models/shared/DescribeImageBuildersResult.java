package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeImageBuildersResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageBuilders")
    public ImageBuilder[] imageBuilders;
    public DescribeImageBuildersResult withImageBuilders(ImageBuilder[] imageBuilders) {
        this.imageBuilders = imageBuilders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeImageBuildersResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}
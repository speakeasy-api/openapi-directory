package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeWorkspaceImagesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Images")
    public WorkspaceImage[] images;
    public DescribeWorkspaceImagesResult withImages(WorkspaceImage[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeWorkspaceImagesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}
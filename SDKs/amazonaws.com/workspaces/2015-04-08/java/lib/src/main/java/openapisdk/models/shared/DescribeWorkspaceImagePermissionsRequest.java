package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeWorkspaceImagePermissionsRequest {
    @JsonProperty("ImageId")
    public String imageId;
    public DescribeWorkspaceImagePermissionsRequest withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public DescribeWorkspaceImagePermissionsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeWorkspaceImagePermissionsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}
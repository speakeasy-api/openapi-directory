package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeWorkspaceImagePermissionsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageId")
    public String imageId;
    public DescribeWorkspaceImagePermissionsResult withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImagePermissions")
    public ImagePermission[] imagePermissions;
    public DescribeWorkspaceImagePermissionsResult withImagePermissions(ImagePermission[] imagePermissions) {
        this.imagePermissions = imagePermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeWorkspaceImagePermissionsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}
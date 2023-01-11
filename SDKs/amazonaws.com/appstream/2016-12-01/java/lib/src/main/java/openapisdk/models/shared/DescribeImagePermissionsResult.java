package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeImagePermissionsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public DescribeImagePermissionsResult withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeImagePermissionsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SharedImagePermissionsList")
    public SharedImagePermissions[] sharedImagePermissionsList;
    public DescribeImagePermissionsResult withSharedImagePermissionsList(SharedImagePermissions[] sharedImagePermissionsList) {
        this.sharedImagePermissionsList = sharedImagePermissionsList;
        return this;
    }
}
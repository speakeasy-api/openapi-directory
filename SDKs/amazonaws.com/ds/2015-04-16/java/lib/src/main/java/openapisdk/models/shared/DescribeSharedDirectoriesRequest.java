package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeSharedDirectoriesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public DescribeSharedDirectoriesRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeSharedDirectoriesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("OwnerDirectoryId")
    public String ownerDirectoryId;
    public DescribeSharedDirectoriesRequest withOwnerDirectoryId(String ownerDirectoryId) {
        this.ownerDirectoryId = ownerDirectoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SharedDirectoryIds")
    public String[] sharedDirectoryIds;
    public DescribeSharedDirectoriesRequest withSharedDirectoryIds(String[] sharedDirectoryIds) {
        this.sharedDirectoryIds = sharedDirectoryIds;
        return this;
    }
}
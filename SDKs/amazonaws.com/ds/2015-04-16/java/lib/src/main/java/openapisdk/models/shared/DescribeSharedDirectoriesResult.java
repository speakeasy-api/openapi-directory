package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeSharedDirectoriesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeSharedDirectoriesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SharedDirectories")
    public SharedDirectory[] sharedDirectories;
    public DescribeSharedDirectoriesResult withSharedDirectories(SharedDirectory[] sharedDirectories) {
        this.sharedDirectories = sharedDirectories;
        return this;
    }
}
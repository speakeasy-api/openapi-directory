package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeDirectoriesRequest
 * Contains the inputs for the <a>DescribeDirectories</a> operation.
**/
public class DescribeDirectoriesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryIds")
    public String[] directoryIds;
    public DescribeDirectoriesRequest withDirectoryIds(String[] directoryIds) {
        this.directoryIds = directoryIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public DescribeDirectoriesRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeDirectoriesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}
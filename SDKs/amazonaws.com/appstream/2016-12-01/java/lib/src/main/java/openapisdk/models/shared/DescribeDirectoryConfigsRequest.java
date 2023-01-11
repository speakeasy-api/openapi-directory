package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDirectoryConfigsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryNames")
    public String[] directoryNames;
    public DescribeDirectoryConfigsRequest withDirectoryNames(String[] directoryNames) {
        this.directoryNames = directoryNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public DescribeDirectoryConfigsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeDirectoryConfigsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}
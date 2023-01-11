package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeDirectoriesResult
 * Contains the results of the <a>DescribeDirectories</a> operation.
**/
public class DescribeDirectoriesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryDescriptions")
    public DirectoryDescription[] directoryDescriptions;
    public DescribeDirectoriesResult withDirectoryDescriptions(DirectoryDescription[] directoryDescriptions) {
        this.directoryDescriptions = directoryDescriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeDirectoriesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}
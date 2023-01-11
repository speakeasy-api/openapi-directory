package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDirectoryConfigsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryConfigs")
    public DirectoryConfig[] directoryConfigs;
    public DescribeDirectoryConfigsResult withDirectoryConfigs(DirectoryConfig[] directoryConfigs) {
        this.directoryConfigs = directoryConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeDirectoryConfigsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}
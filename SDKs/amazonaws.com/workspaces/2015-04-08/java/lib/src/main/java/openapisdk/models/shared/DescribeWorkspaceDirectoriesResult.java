package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeWorkspaceDirectoriesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Directories")
    public WorkspaceDirectory[] directories;
    public DescribeWorkspaceDirectoriesResult withDirectories(WorkspaceDirectory[] directories) {
        this.directories = directories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeWorkspaceDirectoriesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}
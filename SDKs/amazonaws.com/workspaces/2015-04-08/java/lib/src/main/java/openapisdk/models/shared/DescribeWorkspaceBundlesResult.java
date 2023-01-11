package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeWorkspaceBundlesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Bundles")
    public WorkspaceBundle[] bundles;
    public DescribeWorkspaceBundlesResult withBundles(WorkspaceBundle[] bundles) {
        this.bundles = bundles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeWorkspaceBundlesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}
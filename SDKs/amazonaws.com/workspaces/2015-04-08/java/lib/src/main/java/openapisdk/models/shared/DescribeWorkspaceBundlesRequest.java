package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeWorkspaceBundlesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BundleIds")
    public String[] bundleIds;
    public DescribeWorkspaceBundlesRequest withBundleIds(String[] bundleIds) {
        this.bundleIds = bundleIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeWorkspaceBundlesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Owner")
    public String owner;
    public DescribeWorkspaceBundlesRequest withOwner(String owner) {
        this.owner = owner;
        return this;
    }
}
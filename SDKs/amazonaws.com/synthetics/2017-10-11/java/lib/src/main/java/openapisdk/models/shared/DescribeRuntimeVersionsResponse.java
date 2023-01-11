package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeRuntimeVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeRuntimeVersionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuntimeVersions")
    public RuntimeVersion[] runtimeVersions;
    public DescribeRuntimeVersionsResponse withRuntimeVersions(RuntimeVersion[] runtimeVersions) {
        this.runtimeVersions = runtimeVersions;
        return this;
    }
}
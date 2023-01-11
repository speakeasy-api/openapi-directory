package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeEngineVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EngineVersions")
    public EngineVersionInfo[] engineVersions;
    public DescribeEngineVersionsResponse withEngineVersions(EngineVersionInfo[] engineVersions) {
        this.engineVersions = engineVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeEngineVersionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}
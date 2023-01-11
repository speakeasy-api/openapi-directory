package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeConnectorProfilesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorProfileNames")
    public String[] connectorProfileNames;
    public DescribeConnectorProfilesRequestBody withConnectorProfileNames(String[] connectorProfileNames) {
        this.connectorProfileNames = connectorProfileNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorType")
    public DescribeConnectorProfilesRequestBodyConnectorTypeEnum connectorType;
    public DescribeConnectorProfilesRequestBody withConnectorType(DescribeConnectorProfilesRequestBodyConnectorTypeEnum connectorType) {
        this.connectorType = connectorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeConnectorProfilesRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeConnectorProfilesRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}
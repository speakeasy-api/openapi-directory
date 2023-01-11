package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeResourceCollectionHealthResponse {
    @JsonProperty("CloudFormation")
    public CloudFormationHealth[] cloudFormation;
    public DescribeResourceCollectionHealthResponse withCloudFormation(CloudFormationHealth[] cloudFormation) {
        this.cloudFormation = cloudFormation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeResourceCollectionHealthResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Service")
    public ServiceHealth[] service;
    public DescribeResourceCollectionHealthResponse withService(ServiceHealth[] service) {
        this.service = service;
        return this;
    }
}
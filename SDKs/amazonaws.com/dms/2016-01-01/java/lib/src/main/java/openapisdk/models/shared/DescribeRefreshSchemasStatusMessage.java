package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeRefreshSchemasStatusMessage
 * <p/>
**/
public class DescribeRefreshSchemasStatusMessage {
    @JsonProperty("EndpointArn")
    public String endpointArn;
    public DescribeRefreshSchemasStatusMessage withEndpointArn(String endpointArn) {
        this.endpointArn = endpointArn;
        return this;
    }
}
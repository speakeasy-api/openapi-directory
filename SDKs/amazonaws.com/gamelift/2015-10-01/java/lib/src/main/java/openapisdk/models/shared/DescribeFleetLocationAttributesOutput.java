package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeFleetLocationAttributesOutput
 * Represents the returned data in response to a request operation. 
**/
public class DescribeFleetLocationAttributesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetArn")
    public String fleetArn;
    public DescribeFleetLocationAttributesOutput withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetId")
    public String fleetId;
    public DescribeFleetLocationAttributesOutput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationAttributes")
    public LocationAttributes[] locationAttributes;
    public DescribeFleetLocationAttributesOutput withLocationAttributes(LocationAttributes[] locationAttributes) {
        this.locationAttributes = locationAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeFleetLocationAttributesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}
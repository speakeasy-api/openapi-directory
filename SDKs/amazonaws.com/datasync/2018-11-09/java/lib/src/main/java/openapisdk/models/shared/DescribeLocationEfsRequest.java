package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeLocationEfsRequest
 * DescribeLocationEfsRequest
**/
public class DescribeLocationEfsRequest {
    @JsonProperty("LocationArn")
    public String locationArn;
    public DescribeLocationEfsRequest withLocationArn(String locationArn) {
        this.locationArn = locationArn;
        return this;
    }
}
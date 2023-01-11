package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeLocationNfsRequest
 * DescribeLocationNfsRequest
**/
public class DescribeLocationNfsRequest {
    @JsonProperty("LocationArn")
    public String locationArn;
    public DescribeLocationNfsRequest withLocationArn(String locationArn) {
        this.locationArn = locationArn;
        return this;
    }
}
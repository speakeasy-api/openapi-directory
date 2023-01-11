package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeLocationFsxWindowsRequest {
    @JsonProperty("LocationArn")
    public String locationArn;
    public DescribeLocationFsxWindowsRequest withLocationArn(String locationArn) {
        this.locationArn = locationArn;
        return this;
    }
}
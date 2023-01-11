package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeApplicationRequest
 * <p/>
**/
public class DescribeApplicationRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public DescribeApplicationRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
}
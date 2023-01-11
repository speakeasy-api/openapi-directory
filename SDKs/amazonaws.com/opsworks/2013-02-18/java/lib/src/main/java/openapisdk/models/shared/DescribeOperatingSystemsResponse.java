package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeOperatingSystemsResponse
 * The response to a <code>DescribeOperatingSystems</code> request.
**/
public class DescribeOperatingSystemsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OperatingSystems")
    public OperatingSystem[] operatingSystems;
    public DescribeOperatingSystemsResponse withOperatingSystems(OperatingSystem[] operatingSystems) {
        this.operatingSystems = operatingSystems;
        return this;
    }
}
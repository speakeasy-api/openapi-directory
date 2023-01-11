package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeApplicationRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public DescribeApplicationRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncludeAdditionalDetails")
    public Boolean includeAdditionalDetails;
    public DescribeApplicationRequest withIncludeAdditionalDetails(Boolean includeAdditionalDetails) {
        this.includeAdditionalDetails = includeAdditionalDetails;
        return this;
    }
}
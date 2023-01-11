package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeApplicationVersionRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public DescribeApplicationVersionRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonProperty("ApplicationVersionId")
    public Long applicationVersionId;
    public DescribeApplicationVersionRequest withApplicationVersionId(Long applicationVersionId) {
        this.applicationVersionId = applicationVersionId;
        return this;
    }
}
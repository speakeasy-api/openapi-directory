package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeApplicationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationInfo")
    public ApplicationInfo applicationInfo;
    public DescribeApplicationResponse withApplicationInfo(ApplicationInfo applicationInfo) {
        this.applicationInfo = applicationInfo;
        return this;
    }
}
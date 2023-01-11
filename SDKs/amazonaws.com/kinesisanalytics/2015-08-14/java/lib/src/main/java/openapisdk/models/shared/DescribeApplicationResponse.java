package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeApplicationResponse
 * <p/>
**/
public class DescribeApplicationResponse {
    @JsonProperty("ApplicationDetail")
    public ApplicationDetail applicationDetail;
    public DescribeApplicationResponse withApplicationDetail(ApplicationDetail applicationDetail) {
        this.applicationDetail = applicationDetail;
        return this;
    }
}
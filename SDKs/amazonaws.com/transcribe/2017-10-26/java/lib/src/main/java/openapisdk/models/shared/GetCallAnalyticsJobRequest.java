package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCallAnalyticsJobRequest {
    @JsonProperty("CallAnalyticsJobName")
    public String callAnalyticsJobName;
    public GetCallAnalyticsJobRequest withCallAnalyticsJobName(String callAnalyticsJobName) {
        this.callAnalyticsJobName = callAnalyticsJobName;
        return this;
    }
}
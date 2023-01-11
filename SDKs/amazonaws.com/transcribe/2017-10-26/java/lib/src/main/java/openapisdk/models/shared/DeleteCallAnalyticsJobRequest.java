package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteCallAnalyticsJobRequest {
    @JsonProperty("CallAnalyticsJobName")
    public String callAnalyticsJobName;
    public DeleteCallAnalyticsJobRequest withCallAnalyticsJobName(String callAnalyticsJobName) {
        this.callAnalyticsJobName = callAnalyticsJobName;
        return this;
    }
}
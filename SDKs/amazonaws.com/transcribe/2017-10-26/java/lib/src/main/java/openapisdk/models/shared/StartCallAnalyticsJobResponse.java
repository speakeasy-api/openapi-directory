package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartCallAnalyticsJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CallAnalyticsJob")
    public CallAnalyticsJob callAnalyticsJob;
    public StartCallAnalyticsJobResponse withCallAnalyticsJob(CallAnalyticsJob callAnalyticsJob) {
        this.callAnalyticsJob = callAnalyticsJob;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TestMetricFilterRequest {
    @JsonProperty("filterPattern")
    public String filterPattern;
    public TestMetricFilterRequest withFilterPattern(String filterPattern) {
        this.filterPattern = filterPattern;
        return this;
    }
    @JsonProperty("logEventMessages")
    public String[] logEventMessages;
    public TestMetricFilterRequest withLogEventMessages(String[] logEventMessages) {
        this.logEventMessages = logEventMessages;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeLoggingOptionsResponse {
    @JsonProperty("loggingOptions")
    public LoggingOptions loggingOptions;
    public DescribeLoggingOptionsResponse withLoggingOptions(LoggingOptions loggingOptions) {
        this.loggingOptions = loggingOptions;
        return this;
    }
}
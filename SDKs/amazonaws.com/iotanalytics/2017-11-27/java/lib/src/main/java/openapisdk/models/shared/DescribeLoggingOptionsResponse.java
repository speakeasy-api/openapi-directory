package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeLoggingOptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loggingOptions")
    public LoggingOptions loggingOptions;
    public DescribeLoggingOptionsResponse withLoggingOptions(LoggingOptions loggingOptions) {
        this.loggingOptions = loggingOptions;
        return this;
    }
}
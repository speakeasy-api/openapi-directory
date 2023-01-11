package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RunAMonitor200ApplicationJsonRunExecutionsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentLength")
    public Double contentLength;
    public RunAMonitor200ApplicationJsonRunExecutionsRequestBody withContentLength(Double contentLength) {
        this.contentLength = contentLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public String mode;
    public RunAMonitor200ApplicationJsonRunExecutionsRequestBody withMode(String mode) {
        this.mode = mode;
        return this;
    }
}
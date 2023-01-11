package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RunAMonitor200ApplicationJsonRunExecutionsResponseBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentLength")
    public Double contentLength;
    public RunAMonitor200ApplicationJsonRunExecutionsResponseBody withContentLength(Double contentLength) {
        this.contentLength = contentLength;
        return this;
    }
}
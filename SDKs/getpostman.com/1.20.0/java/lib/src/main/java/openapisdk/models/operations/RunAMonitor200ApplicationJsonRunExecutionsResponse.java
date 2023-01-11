package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RunAMonitor200ApplicationJsonRunExecutionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public RunAMonitor200ApplicationJsonRunExecutionsResponseBody body;
    public RunAMonitor200ApplicationJsonRunExecutionsResponse withBody(RunAMonitor200ApplicationJsonRunExecutionsResponseBody body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Double code;
    public RunAMonitor200ApplicationJsonRunExecutionsResponse withCode(Double code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders headers;
    public RunAMonitor200ApplicationJsonRunExecutionsResponse withHeaders(RunAMonitor200ApplicationJsonRunExecutionsResponseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseSize")
    public Double responseSize;
    public RunAMonitor200ApplicationJsonRunExecutionsResponse withResponseSize(Double responseSize) {
        this.responseSize = responseSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseTime")
    public Double responseTime;
    public RunAMonitor200ApplicationJsonRunExecutionsResponse withResponseTime(Double responseTime) {
        this.responseTime = responseTime;
        return this;
    }
}
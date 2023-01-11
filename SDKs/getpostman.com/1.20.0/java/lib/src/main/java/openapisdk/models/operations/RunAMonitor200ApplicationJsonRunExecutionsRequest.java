package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RunAMonitor200ApplicationJsonRunExecutionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public RunAMonitor200ApplicationJsonRunExecutionsRequestBody body;
    public RunAMonitor200ApplicationJsonRunExecutionsRequest withBody(RunAMonitor200ApplicationJsonRunExecutionsRequestBody body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders headers;
    public RunAMonitor200ApplicationJsonRunExecutionsRequest withHeaders(RunAMonitor200ApplicationJsonRunExecutionsRequestHeaders headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public RunAMonitor200ApplicationJsonRunExecutionsRequest withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public String timestamp;
    public RunAMonitor200ApplicationJsonRunExecutionsRequest withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public RunAMonitor200ApplicationJsonRunExecutionsRequest withUrl(String url) {
        this.url = url;
        return this;
    }
}
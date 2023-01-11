package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleMonitor200ApplicationJsonMonitorOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followRedirects")
    public Boolean followRedirects;
    public SingleMonitor200ApplicationJsonMonitorOptions withFollowRedirects(Boolean followRedirects) {
        this.followRedirects = followRedirects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestDelay")
    public Double requestDelay;
    public SingleMonitor200ApplicationJsonMonitorOptions withRequestDelay(Double requestDelay) {
        this.requestDelay = requestDelay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestTimeout")
    public Double requestTimeout;
    public SingleMonitor200ApplicationJsonMonitorOptions withRequestTimeout(Double requestTimeout) {
        this.requestTimeout = requestTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("strictSSL")
    public Boolean strictSSL;
    public SingleMonitor200ApplicationJsonMonitorOptions withStrictSsl(Boolean strictSSL) {
        this.strictSSL = strictSSL;
        return this;
    }
}
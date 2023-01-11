package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RunAMonitor200ApplicationJsonRunExecutions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Double id;
    public RunAMonitor200ApplicationJsonRunExecutions withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("item")
    public RunAMonitor200ApplicationJsonRunExecutionsItem item;
    public RunAMonitor200ApplicationJsonRunExecutions withItem(RunAMonitor200ApplicationJsonRunExecutionsItem item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request")
    public RunAMonitor200ApplicationJsonRunExecutionsRequest request;
    public RunAMonitor200ApplicationJsonRunExecutions withRequest(RunAMonitor200ApplicationJsonRunExecutionsRequest request) {
        this.request = request;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public RunAMonitor200ApplicationJsonRunExecutionsResponse response;
    public RunAMonitor200ApplicationJsonRunExecutions withResponse(RunAMonitor200ApplicationJsonRunExecutionsResponse response) {
        this.response = response;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Runner
 * A self hosted runner
**/
public class Runner {
    @JsonProperty("busy")
    public Boolean busy;
    public Runner withBusy(Boolean busy) {
        this.busy = busy;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public Runner withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels")
    public RunnerLabels[] labels;
    public Runner withLabels(RunnerLabels[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Runner withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("os")
    public String os;
    public Runner withOs(String os) {
        this.os = os;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public Runner withStatus(String status) {
        this.status = status;
        return this;
    }
}
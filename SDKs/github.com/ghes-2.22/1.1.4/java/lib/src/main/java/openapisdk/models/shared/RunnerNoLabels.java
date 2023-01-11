package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RunnerNoLabels {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("busy")
    public Boolean busy;
    public RunnerNoLabels withBusy(Boolean busy) {
        this.busy = busy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Double id;
    public RunnerNoLabels withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RunnerNoLabels withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("os")
    public String os;
    public RunnerNoLabels withOs(String os) {
        this.os = os;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public RunnerNoLabels withStatus(String status) {
        this.status = status;
        return this;
    }
}
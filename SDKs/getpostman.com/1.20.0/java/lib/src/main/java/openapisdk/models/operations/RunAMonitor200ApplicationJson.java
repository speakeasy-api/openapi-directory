package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RunAMonitor200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("run")
    public RunAMonitor200ApplicationJsonRun run;
    public RunAMonitor200ApplicationJson withRun(RunAMonitor200ApplicationJsonRun run) {
        this.run = run;
        return this;
    }
}
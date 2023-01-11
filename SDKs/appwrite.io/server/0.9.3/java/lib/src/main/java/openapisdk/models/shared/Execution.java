package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Execution
 * Execution
**/
public class Execution {
    @JsonProperty("$id")
    public String dollarId;
    public Execution withDollarId(String dollarId) {
        this.dollarId = dollarId;
        return this;
    }
    @JsonProperty("dateCreated")
    public Integer dateCreated;
    public Execution withDateCreated(Integer dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonProperty("exitCode")
    public Integer exitCode;
    public Execution withExitCode(Integer exitCode) {
        this.exitCode = exitCode;
        return this;
    }
    @JsonProperty("functionId")
    public String functionId;
    public Execution withFunctionId(String functionId) {
        this.functionId = functionId;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public Execution withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("stderr")
    public String stderr;
    public Execution withStderr(String stderr) {
        this.stderr = stderr;
        return this;
    }
    @JsonProperty("stdout")
    public String stdout;
    public Execution withStdout(String stdout) {
        this.stdout = stdout;
        return this;
    }
    @JsonProperty("time")
    public Float time;
    public Execution withTime(Float time) {
        this.time = time;
        return this;
    }
    @JsonProperty("trigger")
    public String trigger;
    public Execution withTrigger(String trigger) {
        this.trigger = trigger;
        return this;
    }
}
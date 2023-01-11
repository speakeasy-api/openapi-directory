package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobCommand
 * Specifies code that runs when a job is run.
**/
public class JobCommand {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public JobCommand withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PythonVersion")
    public String pythonVersion;
    public JobCommand withPythonVersion(String pythonVersion) {
        this.pythonVersion = pythonVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScriptLocation")
    public String scriptLocation;
    public JobCommand withScriptLocation(String scriptLocation) {
        this.scriptLocation = scriptLocation;
        return this;
    }
}
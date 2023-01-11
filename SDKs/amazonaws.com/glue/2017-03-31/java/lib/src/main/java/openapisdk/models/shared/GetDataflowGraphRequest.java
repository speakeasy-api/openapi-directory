package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDataflowGraphRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PythonScript")
    public String pythonScript;
    public GetDataflowGraphRequest withPythonScript(String pythonScript) {
        this.pythonScript = pythonScript;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateScriptResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PythonScript")
    public String pythonScript;
    public CreateScriptResponse withPythonScript(String pythonScript) {
        this.pythonScript = pythonScript;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScalaCode")
    public String scalaCode;
    public CreateScriptResponse withScalaCode(String scalaCode) {
        this.scalaCode = scalaCode;
        return this;
    }
}
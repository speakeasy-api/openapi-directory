package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatchChargeStationVariableRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public PatchChargeStationVariableRequestBody withValue(String value) {
        this.value = value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variable")
    public PatchChargeStationVariableRequestBodyVariableEnum variable;
    public PatchChargeStationVariableRequestBody withVariable(PatchChargeStationVariableRequestBodyVariableEnum variable) {
        this.variable = variable;
        return this;
    }
}
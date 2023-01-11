package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InvokeScreenAutomationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public InvokeScreenAutomationRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowId")
    public String rowId;
    public InvokeScreenAutomationRequestBody withRowId(String rowId) {
        this.rowId = rowId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variables")
    public java.util.Map<String, openapisdk.models.shared.VariableValue> variables;
    public InvokeScreenAutomationRequestBody withVariables(java.util.Map<String, openapisdk.models.shared.VariableValue> variables) {
        this.variables = variables;
        return this;
    }
}
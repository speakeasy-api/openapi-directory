package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteConnectorProfileRequestBody {
    @JsonProperty("connectorProfileName")
    public String connectorProfileName;
    public DeleteConnectorProfileRequestBody withConnectorProfileName(String connectorProfileName) {
        this.connectorProfileName = connectorProfileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forceDelete")
    public Boolean forceDelete;
    public DeleteConnectorProfileRequestBody withForceDelete(Boolean forceDelete) {
        this.forceDelete = forceDelete;
        return this;
    }
}
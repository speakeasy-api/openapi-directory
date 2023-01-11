package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OperationRead {
    @JsonProperty("name")
    public String name;
    public OperationRead withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("operationId")
    public String operationId;
    public OperationRead withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonProperty("operatorConfiguration")
    public OperatorConfiguration operatorConfiguration;
    public OperationRead withOperatorConfiguration(OperatorConfiguration operatorConfiguration) {
        this.operatorConfiguration = operatorConfiguration;
        return this;
    }
    @JsonProperty("workspaceId")
    public String workspaceId;
    public OperationRead withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}
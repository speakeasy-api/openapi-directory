package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateGroupVersionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectorDefinitionVersionArn")
    public String connectorDefinitionVersionArn;
    public CreateGroupVersionRequestBody withConnectorDefinitionVersionArn(String connectorDefinitionVersionArn) {
        this.connectorDefinitionVersionArn = connectorDefinitionVersionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CoreDefinitionVersionArn")
    public String coreDefinitionVersionArn;
    public CreateGroupVersionRequestBody withCoreDefinitionVersionArn(String coreDefinitionVersionArn) {
        this.coreDefinitionVersionArn = coreDefinitionVersionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceDefinitionVersionArn")
    public String deviceDefinitionVersionArn;
    public CreateGroupVersionRequestBody withDeviceDefinitionVersionArn(String deviceDefinitionVersionArn) {
        this.deviceDefinitionVersionArn = deviceDefinitionVersionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FunctionDefinitionVersionArn")
    public String functionDefinitionVersionArn;
    public CreateGroupVersionRequestBody withFunctionDefinitionVersionArn(String functionDefinitionVersionArn) {
        this.functionDefinitionVersionArn = functionDefinitionVersionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoggerDefinitionVersionArn")
    public String loggerDefinitionVersionArn;
    public CreateGroupVersionRequestBody withLoggerDefinitionVersionArn(String loggerDefinitionVersionArn) {
        this.loggerDefinitionVersionArn = loggerDefinitionVersionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceDefinitionVersionArn")
    public String resourceDefinitionVersionArn;
    public CreateGroupVersionRequestBody withResourceDefinitionVersionArn(String resourceDefinitionVersionArn) {
        this.resourceDefinitionVersionArn = resourceDefinitionVersionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubscriptionDefinitionVersionArn")
    public String subscriptionDefinitionVersionArn;
    public CreateGroupVersionRequestBody withSubscriptionDefinitionVersionArn(String subscriptionDefinitionVersionArn) {
        this.subscriptionDefinitionVersionArn = subscriptionDefinitionVersionArn;
        return this;
    }
}
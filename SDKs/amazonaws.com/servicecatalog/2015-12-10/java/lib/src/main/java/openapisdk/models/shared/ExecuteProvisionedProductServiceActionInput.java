package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExecuteProvisionedProductServiceActionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public ExecuteProvisionedProductServiceActionInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonProperty("ExecuteToken")
    public String executeToken;
    public ExecuteProvisionedProductServiceActionInput withExecuteToken(String executeToken) {
        this.executeToken = executeToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public java.util.Map<String, String[]> parameters;
    public ExecuteProvisionedProductServiceActionInput withParameters(java.util.Map<String, String[]> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonProperty("ProvisionedProductId")
    public String provisionedProductId;
    public ExecuteProvisionedProductServiceActionInput withProvisionedProductId(String provisionedProductId) {
        this.provisionedProductId = provisionedProductId;
        return this;
    }
    @JsonProperty("ServiceActionId")
    public String serviceActionId;
    public ExecuteProvisionedProductServiceActionInput withServiceActionId(String serviceActionId) {
        this.serviceActionId = serviceActionId;
        return this;
    }
}
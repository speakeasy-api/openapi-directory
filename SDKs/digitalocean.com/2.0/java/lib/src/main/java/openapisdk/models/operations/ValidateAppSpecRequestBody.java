package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ValidateAppSpecRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("app_id")
    public String appId;
    public ValidateAppSpecRequestBody withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonProperty("spec")
    public openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec spec;
    public ValidateAppSpecRequestBody withSpec(openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec spec) {
        this.spec = spec;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateClusterConfigRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public UpdateClusterConfigRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logging")
    public UpdateClusterConfigRequestBodyLogging logging;
    public UpdateClusterConfigRequestBody withLogging(UpdateClusterConfigRequestBodyLogging logging) {
        this.logging = logging;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourcesVpcConfig")
    public UpdateClusterConfigRequestBodyResourcesVpcConfig resourcesVpcConfig;
    public UpdateClusterConfigRequestBody withResourcesVpcConfig(UpdateClusterConfigRequestBodyResourcesVpcConfig resourcesVpcConfig) {
        this.resourcesVpcConfig = resourcesVpcConfig;
        return this;
    }
}
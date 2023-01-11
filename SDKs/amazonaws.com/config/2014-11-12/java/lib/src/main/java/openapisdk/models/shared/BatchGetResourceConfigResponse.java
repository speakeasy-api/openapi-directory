package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetResourceConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseConfigurationItems")
    public BaseConfigurationItem[] baseConfigurationItems;
    public BatchGetResourceConfigResponse withBaseConfigurationItems(BaseConfigurationItem[] baseConfigurationItems) {
        this.baseConfigurationItems = baseConfigurationItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unprocessedResourceKeys")
    public ResourceKey[] unprocessedResourceKeys;
    public BatchGetResourceConfigResponse withUnprocessedResourceKeys(ResourceKey[] unprocessedResourceKeys) {
        this.unprocessedResourceKeys = unprocessedResourceKeys;
        return this;
    }
}
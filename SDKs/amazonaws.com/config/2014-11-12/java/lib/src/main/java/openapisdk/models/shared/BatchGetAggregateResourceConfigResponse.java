package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetAggregateResourceConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BaseConfigurationItems")
    public BaseConfigurationItem[] baseConfigurationItems;
    public BatchGetAggregateResourceConfigResponse withBaseConfigurationItems(BaseConfigurationItem[] baseConfigurationItems) {
        this.baseConfigurationItems = baseConfigurationItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnprocessedResourceIdentifiers")
    public AggregateResourceIdentifier[] unprocessedResourceIdentifiers;
    public BatchGetAggregateResourceConfigResponse withUnprocessedResourceIdentifiers(AggregateResourceIdentifier[] unprocessedResourceIdentifiers) {
        this.unprocessedResourceIdentifiers = unprocessedResourceIdentifiers;
        return this;
    }
}
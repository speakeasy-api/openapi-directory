package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateConnectionRequest {
    @JsonProperty("ConnectionName")
    public String connectionName;
    public CreateConnectionRequest withConnectionName(String connectionName) {
        this.connectionName = connectionName;
        return this;
    }
    @JsonProperty("ProviderType")
    public ProviderTypeEnum providerType;
    public CreateConnectionRequest withProviderType(ProviderTypeEnum providerType) {
        this.providerType = providerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateConnectionRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateConnectionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public UpdateConnectionRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("ConnectionInput")
    public ConnectionInput connectionInput;
    public UpdateConnectionRequest withConnectionInput(ConnectionInput connectionInput) {
        this.connectionInput = connectionInput;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public UpdateConnectionRequest withName(String name) {
        this.name = name;
        return this;
    }
}
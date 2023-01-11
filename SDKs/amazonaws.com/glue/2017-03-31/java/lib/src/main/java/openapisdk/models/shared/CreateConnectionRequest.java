package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateConnectionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public CreateConnectionRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("ConnectionInput")
    public ConnectionInput connectionInput;
    public CreateConnectionRequest withConnectionInput(ConnectionInput connectionInput) {
        this.connectionInput = connectionInput;
        return this;
    }
}
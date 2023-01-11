package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetConnectionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public GetConnectionRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HidePassword")
    public Boolean hidePassword;
    public GetConnectionRequest withHidePassword(Boolean hidePassword) {
        this.hidePassword = hidePassword;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public GetConnectionRequest withName(String name) {
        this.name = name;
        return this;
    }
}
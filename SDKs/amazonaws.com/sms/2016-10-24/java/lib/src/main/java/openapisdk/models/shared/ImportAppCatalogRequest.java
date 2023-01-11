package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportAppCatalogRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleName")
    public String roleName;
    public ImportAppCatalogRequest withRoleName(String roleName) {
        this.roleName = roleName;
        return this;
    }
}
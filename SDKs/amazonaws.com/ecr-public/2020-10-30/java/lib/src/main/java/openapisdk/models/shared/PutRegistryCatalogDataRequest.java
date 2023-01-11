package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutRegistryCatalogDataRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public PutRegistryCatalogDataRequest withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}
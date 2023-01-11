package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegistryCatalogData
 * The metadata for a public registry.
**/
public class RegistryCatalogData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public RegistryCatalogData withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}
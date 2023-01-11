package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProductOverrideWithCatalogValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalogValue")
    public String catalogValue;
    public ProductOverrideWithCatalogValue withCatalogValue(String catalogValue) {
        this.catalogValue = catalogValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("override")
    public String override;
    public ProductOverrideWithCatalogValue withOverride(String override) {
        this.override = override;
        return this;
    }
}
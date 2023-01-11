package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatchOrganizationRequestBodyThemeColors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public String primary;
    public PatchOrganizationRequestBodyThemeColors withPrimary(String primary) {
        this.primary = primary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondary")
    public String secondary;
    public PatchOrganizationRequestBodyThemeColors withSecondary(String secondary) {
        this.secondary = secondary;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatchOrganizationRequestBodyTheme {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("colors")
    public PatchOrganizationRequestBodyThemeColors colors;
    public PatchOrganizationRequestBodyTheme withColors(PatchOrganizationRequestBodyThemeColors colors) {
        this.colors = colors;
        return this;
    }
}
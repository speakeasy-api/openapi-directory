package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateMapRequestBodyConfiguration
 * Specifies the map tile style selected from an available provider.
**/
public class CreateMapRequestBodyConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Style")
    public String style;
    public CreateMapRequestBodyConfiguration withStyle(String style) {
        this.style = style;
        return this;
    }
}
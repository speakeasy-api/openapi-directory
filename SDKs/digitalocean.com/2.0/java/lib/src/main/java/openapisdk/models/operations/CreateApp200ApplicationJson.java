package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApp200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("app")
    public openapisdk.models.shared.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems app;
    public CreateApp200ApplicationJson withApp(openapisdk.models.shared.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems app) {
        this.app = app;
        return this;
    }
}
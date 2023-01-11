package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21appsPostResponses200ContentApplication1jsonSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("app")
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems app;
    public Onev21appsPostResponses200ContentApplication1jsonSchema withApp(Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems app) {
        this.app = app;
        return this;
    }
}
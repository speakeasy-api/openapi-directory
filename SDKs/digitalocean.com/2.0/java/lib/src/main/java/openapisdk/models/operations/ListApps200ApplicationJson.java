package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListApps200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apps")
    public ListApps200ApplicationJsonApps[] apps;
    public ListApps200ApplicationJson withApps(ListApps200ApplicationJsonApps[] apps) {
        this.apps = apps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public openapisdk.models.shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks links;
    public ListApps200ApplicationJson withLinks(openapisdk.models.shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public openapisdk.models.shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf2PropertiesMeta meta;
    public ListApps200ApplicationJson withMeta(openapisdk.models.shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf2PropertiesMeta meta) {
        this.meta = meta;
        return this;
    }
}
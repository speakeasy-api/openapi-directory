package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployments200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployments")
    public ListDeployments200ApplicationJsonAnAppDeployment[] deployments;
    public ListDeployments200ApplicationJson withDeployments(ListDeployments200ApplicationJsonAnAppDeployment[] deployments) {
        this.deployments = deployments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public openapisdk.models.shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks links;
    public ListDeployments200ApplicationJson withLinks(openapisdk.models.shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public openapisdk.models.shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf2PropertiesMeta meta;
    public ListDeployments200ApplicationJson withMeta(openapisdk.models.shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf2PropertiesMeta meta) {
        this.meta = meta;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListGarbageCollections200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("garbage_collections")
    public openapisdk.models.shared.Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollection[] garbageCollections;
    public ListGarbageCollections200ApplicationJson withGarbageCollections(openapisdk.models.shared.Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollection[] garbageCollections) {
        this.garbageCollections = garbageCollections;
        return this;
    }
}
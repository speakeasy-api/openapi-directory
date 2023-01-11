package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCollectionFromSchema200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public CreateCollectionFromSchema200ApplicationJsonCollection collection;
    public CreateCollectionFromSchema200ApplicationJson withCollection(CreateCollectionFromSchema200ApplicationJsonCollection collection) {
        this.collection = collection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relations")
    public CreateCollectionFromSchema200ApplicationJsonRelations[] relations;
    public CreateCollectionFromSchema200ApplicationJson withRelations(CreateCollectionFromSchema200ApplicationJsonRelations[] relations) {
        this.relations = relations;
        return this;
    }
}
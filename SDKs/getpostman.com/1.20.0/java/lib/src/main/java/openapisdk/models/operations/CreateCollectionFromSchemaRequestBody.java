package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCollectionFromSchemaRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateCollectionFromSchemaRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relations")
    public CreateCollectionFromSchemaRequestBodyRelations[] relations;
    public CreateCollectionFromSchemaRequestBody withRelations(CreateCollectionFromSchemaRequestBodyRelations[] relations) {
        this.relations = relations;
        return this;
    }
}
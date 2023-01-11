package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCollectionFromSchemaRequestBodyRelations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public CreateCollectionFromSchemaRequestBodyRelations withType(String type) {
        this.type = type;
        return this;
    }
}
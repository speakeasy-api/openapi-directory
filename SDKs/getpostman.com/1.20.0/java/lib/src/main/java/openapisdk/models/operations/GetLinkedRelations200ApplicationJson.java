package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLinkedRelations200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relations")
    public GetLinkedRelations200ApplicationJsonRelations relations;
    public GetLinkedRelations200ApplicationJson withRelations(GetLinkedRelations200ApplicationJsonRelations relations) {
        this.relations = relations;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDocumentationRelations200ApplicationJsonDocumentation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectionId")
    public String collectionId;
    public GetDocumentationRelations200ApplicationJsonDocumentation withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetDocumentationRelations200ApplicationJsonDocumentation withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetDocumentationRelations200ApplicationJsonDocumentation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedAt")
    public String updatedAt;
    public GetDocumentationRelations200ApplicationJsonDocumentation withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}
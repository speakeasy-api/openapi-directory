package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetIntegrationTestRelations200ApplicationJsonIntegrationtest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectionId")
    public String collectionId;
    public GetIntegrationTestRelations200ApplicationJsonIntegrationtest withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetIntegrationTestRelations200ApplicationJsonIntegrationtest withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetIntegrationTestRelations200ApplicationJsonIntegrationtest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedAt")
    public String updatedAt;
    public GetIntegrationTestRelations200ApplicationJsonIntegrationtest withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}
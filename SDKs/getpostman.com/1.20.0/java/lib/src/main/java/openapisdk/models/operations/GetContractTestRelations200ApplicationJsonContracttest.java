package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetContractTestRelations200ApplicationJsonContracttest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectionId")
    public String collectionId;
    public GetContractTestRelations200ApplicationJsonContracttest withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetContractTestRelations200ApplicationJsonContracttest withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetContractTestRelations200ApplicationJsonContracttest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedAt")
    public String updatedAt;
    public GetContractTestRelations200ApplicationJsonContracttest withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}
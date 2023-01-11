package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleCollection200ApplicationJsonCollectionInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_postman_id")
    public String postmanId;
    public SingleCollection200ApplicationJsonCollectionInfo withPostmanId(String postmanId) {
        this.postmanId = postmanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SingleCollection200ApplicationJsonCollectionInfo withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SingleCollection200ApplicationJsonCollectionInfo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public String schema;
    public SingleCollection200ApplicationJsonCollectionInfo withSchema(String schema) {
        this.schema = schema;
        return this;
    }
}
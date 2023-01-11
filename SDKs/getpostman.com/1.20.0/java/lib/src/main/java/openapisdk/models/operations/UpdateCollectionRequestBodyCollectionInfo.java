package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCollectionRequestBodyCollectionInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_postman_id")
    public String postmanId;
    public UpdateCollectionRequestBodyCollectionInfo withPostmanId(String postmanId) {
        this.postmanId = postmanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateCollectionRequestBodyCollectionInfo withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateCollectionRequestBodyCollectionInfo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public String schema;
    public UpdateCollectionRequestBodyCollectionInfo withSchema(String schema) {
        this.schema = schema;
        return this;
    }
}
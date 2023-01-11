package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAnApiVersion200ApplicationJsonVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api")
    public String api;
    public GetAnApiVersion200ApplicationJsonVersion withApi(String api) {
        this.api = api;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdAt")
    public String createdAt;
    public GetAnApiVersion200ApplicationJsonVersion withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public String createdBy;
    public GetAnApiVersion200ApplicationJsonVersion withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetAnApiVersion200ApplicationJsonVersion withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetAnApiVersion200ApplicationJsonVersion withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public String[] schema;
    public GetAnApiVersion200ApplicationJsonVersion withSchema(String[] schema) {
        this.schema = schema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedAt")
    public String updatedAt;
    public GetAnApiVersion200ApplicationJsonVersion withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedBy")
    public String updatedBy;
    public GetAnApiVersion200ApplicationJsonVersion withUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
}
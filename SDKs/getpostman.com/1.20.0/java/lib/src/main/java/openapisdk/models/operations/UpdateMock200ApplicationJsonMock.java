package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMock200ApplicationJsonMock {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public String collection;
    public UpdateMock200ApplicationJsonMock withCollection(String collection) {
        this.collection = collection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public UpdateMock200ApplicationJsonMockConfig config;
    public UpdateMock200ApplicationJsonMock withConfig(UpdateMock200ApplicationJsonMockConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public String environment;
    public UpdateMock200ApplicationJsonMock withEnvironment(String environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdateMock200ApplicationJsonMock withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mockUrl")
    public String mockUrl;
    public UpdateMock200ApplicationJsonMock withMockUrl(String mockUrl) {
        this.mockUrl = mockUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateMock200ApplicationJsonMock withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public String owner;
    public UpdateMock200ApplicationJsonMock withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public UpdateMock200ApplicationJsonMock withUid(String uid) {
        this.uid = uid;
        return this;
    }
}
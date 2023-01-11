package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMock200ApplicationJsonMock {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public String collection;
    public CreateMock200ApplicationJsonMock withCollection(String collection) {
        this.collection = collection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public String environment;
    public CreateMock200ApplicationJsonMock withEnvironment(String environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CreateMock200ApplicationJsonMock withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mockUrl")
    public String mockUrl;
    public CreateMock200ApplicationJsonMock withMockUrl(String mockUrl) {
        this.mockUrl = mockUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public String owner;
    public CreateMock200ApplicationJsonMock withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public CreateMock200ApplicationJsonMock withUid(String uid) {
        this.uid = uid;
        return this;
    }
}
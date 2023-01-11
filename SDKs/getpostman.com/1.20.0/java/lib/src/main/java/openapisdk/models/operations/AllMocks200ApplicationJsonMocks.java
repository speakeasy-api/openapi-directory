package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AllMocks200ApplicationJsonMocks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public String collection;
    public AllMocks200ApplicationJsonMocks withCollection(String collection) {
        this.collection = collection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public String environment;
    public AllMocks200ApplicationJsonMocks withEnvironment(String environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AllMocks200ApplicationJsonMocks withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mockUrl")
    public String mockUrl;
    public AllMocks200ApplicationJsonMocks withMockUrl(String mockUrl) {
        this.mockUrl = mockUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public String owner;
    public AllMocks200ApplicationJsonMocks withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public AllMocks200ApplicationJsonMocks withUid(String uid) {
        this.uid = uid;
        return this;
    }
}
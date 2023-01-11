package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMockRequestBodyMock {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public String collection;
    public CreateMockRequestBodyMock withCollection(String collection) {
        this.collection = collection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public String environment;
    public CreateMockRequestBodyMock withEnvironment(String environment) {
        this.environment = environment;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AllMocks200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mocks")
    public AllMocks200ApplicationJsonMocks[] mocks;
    public AllMocks200ApplicationJson withMocks(AllMocks200ApplicationJsonMocks[] mocks) {
        this.mocks = mocks;
        return this;
    }
}
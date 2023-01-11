package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UnpublishMock200ApplicationJsonMock {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UnpublishMock200ApplicationJsonMock withId(String id) {
        this.id = id;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMock200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mock")
    public CreateMock200ApplicationJsonMock mock;
    public CreateMock200ApplicationJson withMock(CreateMock200ApplicationJsonMock mock) {
        this.mock = mock;
        return this;
    }
}
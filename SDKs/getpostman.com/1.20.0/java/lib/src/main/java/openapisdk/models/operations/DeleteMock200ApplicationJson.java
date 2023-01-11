package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteMock200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mock")
    public DeleteMock200ApplicationJsonMock mock;
    public DeleteMock200ApplicationJson withMock(DeleteMock200ApplicationJsonMock mock) {
        this.mock = mock;
        return this;
    }
}
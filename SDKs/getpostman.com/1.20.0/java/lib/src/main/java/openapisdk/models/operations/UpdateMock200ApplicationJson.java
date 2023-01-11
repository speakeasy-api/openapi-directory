package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMock200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mock")
    public UpdateMock200ApplicationJsonMock mock;
    public UpdateMock200ApplicationJson withMock(UpdateMock200ApplicationJsonMock mock) {
        this.mock = mock;
        return this;
    }
}
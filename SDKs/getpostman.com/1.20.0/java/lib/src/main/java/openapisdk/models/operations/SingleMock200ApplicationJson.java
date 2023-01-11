package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleMock200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mock")
    public SingleMock200ApplicationJsonMock mock;
    public SingleMock200ApplicationJson withMock(SingleMock200ApplicationJsonMock mock) {
        this.mock = mock;
        return this;
    }
}
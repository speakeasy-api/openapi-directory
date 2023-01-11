package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UnpublishMock200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mock")
    public UnpublishMock200ApplicationJsonMock mock;
    public UnpublishMock200ApplicationJson withMock(UnpublishMock200ApplicationJsonMock mock) {
        this.mock = mock;
        return this;
    }
}
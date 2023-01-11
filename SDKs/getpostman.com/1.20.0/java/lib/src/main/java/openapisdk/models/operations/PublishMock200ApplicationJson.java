package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PublishMock200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mock")
    public PublishMock200ApplicationJsonMock mock;
    public PublishMock200ApplicationJson withMock(PublishMock200ApplicationJsonMock mock) {
        this.mock = mock;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMockRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mock")
    public CreateMockRequestBodyMock mock;
    public CreateMockRequestBody withMock(CreateMockRequestBodyMock mock) {
        this.mock = mock;
        return this;
    }
}
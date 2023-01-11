package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMockRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mock")
    public UpdateMockRequestBodyMock mock;
    public UpdateMockRequestBody withMock(UpdateMockRequestBodyMock mock) {
        this.mock = mock;
        return this;
    }
}
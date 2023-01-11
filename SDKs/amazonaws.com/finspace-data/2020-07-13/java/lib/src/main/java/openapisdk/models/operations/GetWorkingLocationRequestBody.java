package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetWorkingLocationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationType")
    public GetWorkingLocationRequestBodyLocationTypeEnum locationType;
    public GetWorkingLocationRequestBody withLocationType(GetWorkingLocationRequestBodyLocationTypeEnum locationType) {
        this.locationType = locationType;
        return this;
    }
}
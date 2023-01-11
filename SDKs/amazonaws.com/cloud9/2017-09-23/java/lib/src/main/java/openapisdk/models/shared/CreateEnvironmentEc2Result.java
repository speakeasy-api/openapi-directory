package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEnvironmentEc2Result {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentId")
    public String environmentId;
    public CreateEnvironmentEc2Result withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
}
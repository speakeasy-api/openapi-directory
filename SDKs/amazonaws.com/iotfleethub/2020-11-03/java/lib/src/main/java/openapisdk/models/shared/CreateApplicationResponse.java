package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateApplicationResponse {
    @JsonProperty("applicationArn")
    public String applicationArn;
    public CreateApplicationResponse withApplicationArn(String applicationArn) {
        this.applicationArn = applicationArn;
        return this;
    }
    @JsonProperty("applicationId")
    public String applicationId;
    public CreateApplicationResponse withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}
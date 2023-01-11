package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateApplicationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationDescription")
    public String applicationDescription;
    public UpdateApplicationRequestBody withApplicationDescription(String applicationDescription) {
        this.applicationDescription = applicationDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationName")
    public String applicationName;
    public UpdateApplicationRequestBody withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateApplicationRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
}
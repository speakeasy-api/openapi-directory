package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApplicationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationDescription")
    public String applicationDescription;
    public CreateApplicationRequestBody withApplicationDescription(String applicationDescription) {
        this.applicationDescription = applicationDescription;
        return this;
    }
    @JsonProperty("applicationName")
    public String applicationName;
    public CreateApplicationRequestBody withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateApplicationRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public CreateApplicationRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateApplicationRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}
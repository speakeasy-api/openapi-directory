package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateBotRequestBody {
    @JsonProperty("botName")
    public String botName;
    public UpdateBotRequestBody withBotName(String botName) {
        this.botName = botName;
        return this;
    }
    @JsonProperty("dataPrivacy")
    public UpdateBotRequestBodyDataPrivacy dataPrivacy;
    public UpdateBotRequestBody withDataPrivacy(UpdateBotRequestBodyDataPrivacy dataPrivacy) {
        this.dataPrivacy = dataPrivacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateBotRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("idleSessionTTLInSeconds")
    public Long idleSessionTTLInSeconds;
    public UpdateBotRequestBody withIdleSessionTtlInSeconds(Long idleSessionTTLInSeconds) {
        this.idleSessionTTLInSeconds = idleSessionTTLInSeconds;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public UpdateBotRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}
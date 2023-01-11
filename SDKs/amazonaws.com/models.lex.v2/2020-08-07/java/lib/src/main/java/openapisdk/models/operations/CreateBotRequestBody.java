package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBotRequestBody {
    @JsonProperty("botName")
    public String botName;
    public CreateBotRequestBody withBotName(String botName) {
        this.botName = botName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botTags")
    public java.util.Map<String, String> botTags;
    public CreateBotRequestBody withBotTags(java.util.Map<String, String> botTags) {
        this.botTags = botTags;
        return this;
    }
    @JsonProperty("dataPrivacy")
    public CreateBotRequestBodyDataPrivacy dataPrivacy;
    public CreateBotRequestBody withDataPrivacy(CreateBotRequestBodyDataPrivacy dataPrivacy) {
        this.dataPrivacy = dataPrivacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateBotRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("idleSessionTTLInSeconds")
    public Long idleSessionTTLInSeconds;
    public CreateBotRequestBody withIdleSessionTtlInSeconds(Long idleSessionTTLInSeconds) {
        this.idleSessionTTLInSeconds = idleSessionTTLInSeconds;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public CreateBotRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testBotAliasTags")
    public java.util.Map<String, String> testBotAliasTags;
    public CreateBotRequestBody withTestBotAliasTags(java.util.Map<String, String> testBotAliasTags) {
        this.testBotAliasTags = testBotAliasTags;
        return this;
    }
}
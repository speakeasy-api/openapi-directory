package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BotImportSpecification
 * Provides the bot parameters required for importing a bot.
**/
public class BotImportSpecification {
    @JsonProperty("botName")
    public String botName;
    public BotImportSpecification withBotName(String botName) {
        this.botName = botName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botTags")
    public java.util.Map<String, String> botTags;
    public BotImportSpecification withBotTags(java.util.Map<String, String> botTags) {
        this.botTags = botTags;
        return this;
    }
    @JsonProperty("dataPrivacy")
    public DataPrivacy dataPrivacy;
    public BotImportSpecification withDataPrivacy(DataPrivacy dataPrivacy) {
        this.dataPrivacy = dataPrivacy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idleSessionTTLInSeconds")
    public Long idleSessionTTLInSeconds;
    public BotImportSpecification withIdleSessionTtlInSeconds(Long idleSessionTTLInSeconds) {
        this.idleSessionTTLInSeconds = idleSessionTTLInSeconds;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public BotImportSpecification withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testBotAliasTags")
    public java.util.Map<String, String> testBotAliasTags;
    public BotImportSpecification withTestBotAliasTags(java.util.Map<String, String> testBotAliasTags) {
        this.testBotAliasTags = testBotAliasTags;
        return this;
    }
}
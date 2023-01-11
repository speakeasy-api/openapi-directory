package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatchOrganizationRequestBodyChannels {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slack")
    public java.util.Map<String, Object> slack;
    public PatchOrganizationRequestBodyChannels withSlack(java.util.Map<String, Object> slack) {
        this.slack = slack;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telegram")
    public java.util.Map<String, Object> telegram;
    public PatchOrganizationRequestBodyChannels withTelegram(java.util.Map<String, Object> telegram) {
        this.telegram = telegram;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigTelnet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keymap")
    public String keymap;
    public ConfigTelnet withKeymap(String keymap) {
        this.keymap = keymap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paging_prompt")
    public String pagingPrompt;
    public ConfigTelnet withPagingPrompt(String pagingPrompt) {
        this.pagingPrompt = pagingPrompt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public ConfigTelnet withPort(Integer port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prompt")
    public String prompt;
    public ConfigTelnet withPrompt(String prompt) {
        this.prompt = prompt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rule")
    public String rule;
    public ConfigTelnet withRule(String rule) {
        this.rule = rule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userdb")
    public String userdb;
    public ConfigTelnet withUserdb(String userdb) {
        this.userdb = userdb;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigTod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public ConfigTod withPort(Integer port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retries")
    public Integer retries;
    public ConfigTod withRetries(Integer retries) {
        this.retries = retries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public ConfigTod withScript(String script) {
        this.script = script;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public String server;
    public ConfigTod withServer(String server) {
        this.server = server;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public Integer timeout;
    public ConfigTod withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigTftp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cache")
    public Integer cache;
    public ConfigTftp withCache(Integer cache) {
        this.cache = cache;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client")
    public String client;
    public ConfigTftp withClient(String client) {
        this.client = client;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dstfile")
    public String dstfile;
    public ConfigTftp withDstfile(String dstfile) {
        this.dstfile = dstfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public String mode;
    public ConfigTftp withMode(String mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public ConfigTftp withPort(Integer port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retries")
    public Integer retries;
    public ConfigTftp withRetries(Integer retries) {
        this.retries = retries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public ConfigTftp withScript(String script) {
        this.script = script;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public String server;
    public ConfigTftp withServer(String server) {
        this.server = server;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("srcfile")
    public String srcfile;
    public ConfigTftp withSrcfile(String srcfile) {
        this.srcfile = srcfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public Integer timeout;
    public ConfigTftp withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trace")
    public String trace;
    public ConfigTftp withTrace(String trace) {
        this.trace = trace;
        return this;
    }
}
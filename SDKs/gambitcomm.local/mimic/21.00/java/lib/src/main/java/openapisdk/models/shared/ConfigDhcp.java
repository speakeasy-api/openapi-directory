package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigDhcp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add_options")
    public String addOptions;
    public ConfigDhcp withAddOptions(String addOptions) {
        this.addOptions = addOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classid")
    public String classid;
    public ConfigDhcp withClassid(String classid) {
        this.classid = classid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hwaddr")
    public String hwaddr;
    public ConfigDhcp withHwaddr(String hwaddr) {
        this.hwaddr = hwaddr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public ConfigDhcp withScript(String script) {
        this.script = script;
        return this;
    }
}
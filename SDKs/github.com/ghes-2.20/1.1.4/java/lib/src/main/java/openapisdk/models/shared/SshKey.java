package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SshKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public SshKey withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pretty-print")
    public String prettyPrint;
    public SshKey withPrettyPrint(String prettyPrint) {
        this.prettyPrint = prettyPrint;
        return this;
    }
}
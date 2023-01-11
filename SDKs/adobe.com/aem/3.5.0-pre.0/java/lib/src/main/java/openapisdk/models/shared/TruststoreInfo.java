package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TruststoreInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aliases")
    public TruststoreItems[] aliases;
    public TruststoreInfo withAliases(TruststoreItems[] aliases) {
        this.aliases = aliases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exists")
    public Boolean exists;
    public TruststoreInfo withExists(Boolean exists) {
        this.exists = exists;
        return this;
    }
}
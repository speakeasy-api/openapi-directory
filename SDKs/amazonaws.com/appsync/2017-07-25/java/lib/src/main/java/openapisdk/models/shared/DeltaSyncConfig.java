package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeltaSyncConfig
 * Describes a Delta Sync configuration.
**/
public class DeltaSyncConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseTableTTL")
    public Long baseTableTTL;
    public DeltaSyncConfig withBaseTableTtl(Long baseTableTTL) {
        this.baseTableTTL = baseTableTTL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deltaSyncTableName")
    public String deltaSyncTableName;
    public DeltaSyncConfig withDeltaSyncTableName(String deltaSyncTableName) {
        this.deltaSyncTableName = deltaSyncTableName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deltaSyncTableTTL")
    public Long deltaSyncTableTTL;
    public DeltaSyncConfig withDeltaSyncTableTtl(Long deltaSyncTableTTL) {
        this.deltaSyncTableTTL = deltaSyncTableTTL;
        return this;
    }
}
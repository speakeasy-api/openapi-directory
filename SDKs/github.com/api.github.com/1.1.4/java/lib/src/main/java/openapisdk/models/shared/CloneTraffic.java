package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CloneTraffic
 * Clone Traffic
**/
public class CloneTraffic {
    @JsonProperty("clones")
    public Traffic[] clones;
    public CloneTraffic withClones(Traffic[] clones) {
        this.clones = clones;
        return this;
    }
    @JsonProperty("count")
    public Long count;
    public CloneTraffic withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonProperty("uniques")
    public Long uniques;
    public CloneTraffic withUniques(Long uniques) {
        this.uniques = uniques;
        return this;
    }
}
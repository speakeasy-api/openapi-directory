package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DomainStats
 * Usage-specific statistics about the domain.
**/
public class DomainStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MeteringProfileCount")
    public Long meteringProfileCount;
    public DomainStats withMeteringProfileCount(Long meteringProfileCount) {
        this.meteringProfileCount = meteringProfileCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectCount")
    public Long objectCount;
    public DomainStats withObjectCount(Long objectCount) {
        this.objectCount = objectCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProfileCount")
    public Long profileCount;
    public DomainStats withProfileCount(Long profileCount) {
        this.profileCount = profileCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalSize")
    public Long totalSize;
    public DomainStats withTotalSize(Long totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}
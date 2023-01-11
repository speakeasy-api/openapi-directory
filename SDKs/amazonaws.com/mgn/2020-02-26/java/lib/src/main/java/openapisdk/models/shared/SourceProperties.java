package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SourceProperties
 * Source server properties.
**/
public class SourceProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpus")
    public Cpu[] cpus;
    public SourceProperties withCpus(Cpu[] cpus) {
        this.cpus = cpus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disks")
    public Disk[] disks;
    public SourceProperties withDisks(Disk[] disks) {
        this.disks = disks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identificationHints")
    public IdentificationHints identificationHints;
    public SourceProperties withIdentificationHints(IdentificationHints identificationHints) {
        this.identificationHints = identificationHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdatedDateTime")
    public String lastUpdatedDateTime;
    public SourceProperties withLastUpdatedDateTime(String lastUpdatedDateTime) {
        this.lastUpdatedDateTime = lastUpdatedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkInterfaces")
    public NetworkInterface[] networkInterfaces;
    public SourceProperties withNetworkInterfaces(NetworkInterface[] networkInterfaces) {
        this.networkInterfaces = networkInterfaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("os")
    public Os os;
    public SourceProperties withOs(Os os) {
        this.os = os;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ramBytes")
    public Long ramBytes;
    public SourceProperties withRamBytes(Long ramBytes) {
        this.ramBytes = ramBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendedInstanceType")
    public String recommendedInstanceType;
    public SourceProperties withRecommendedInstanceType(String recommendedInstanceType) {
        this.recommendedInstanceType = recommendedInstanceType;
        return this;
    }
}
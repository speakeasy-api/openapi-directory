package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LensUpgradeSummary
 * Lens upgrade summary return object.
**/
public class LensUpgradeSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentLensVersion")
    public String currentLensVersion;
    public LensUpgradeSummary withCurrentLensVersion(String currentLensVersion) {
        this.currentLensVersion = currentLensVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestLensVersion")
    public String latestLensVersion;
    public LensUpgradeSummary withLatestLensVersion(String latestLensVersion) {
        this.latestLensVersion = latestLensVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensAlias")
    public String lensAlias;
    public LensUpgradeSummary withLensAlias(String lensAlias) {
        this.lensAlias = lensAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadId")
    public String workloadId;
    public LensUpgradeSummary withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadName")
    public String workloadName;
    public LensUpgradeSummary withWorkloadName(String workloadName) {
        this.workloadName = workloadName;
        return this;
    }
}
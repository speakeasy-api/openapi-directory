package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLensVersionDifferenceOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BaseLensVersion")
    public String baseLensVersion;
    public GetLensVersionDifferenceOutput withBaseLensVersion(String baseLensVersion) {
        this.baseLensVersion = baseLensVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestLensVersion")
    public String latestLensVersion;
    public GetLensVersionDifferenceOutput withLatestLensVersion(String latestLensVersion) {
        this.latestLensVersion = latestLensVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensAlias")
    public String lensAlias;
    public GetLensVersionDifferenceOutput withLensAlias(String lensAlias) {
        this.lensAlias = lensAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VersionDifferences")
    public VersionDifferences versionDifferences;
    public GetLensVersionDifferenceOutput withVersionDifferences(VersionDifferences versionDifferences) {
        this.versionDifferences = versionDifferences;
        return this;
    }
}
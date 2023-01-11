package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LensSummary
 * A lens summary of a lens.
**/
public class LensSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public LensSummary withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensAlias")
    public String lensAlias;
    public LensSummary withLensAlias(String lensAlias) {
        this.lensAlias = lensAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensName")
    public String lensName;
    public LensSummary withLensName(String lensName) {
        this.lensName = lensName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensVersion")
    public String lensVersion;
    public LensSummary withLensVersion(String lensVersion) {
        this.lensVersion = lensVersion;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Cvss
 * CVSS scores from the advisory related to the vulnerability.
**/
public class Cvss {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Adjustments")
    public Adjustment[] adjustments;
    public Cvss withAdjustments(Adjustment[] adjustments) {
        this.adjustments = adjustments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BaseScore")
    public Double baseScore;
    public Cvss withBaseScore(Double baseScore) {
        this.baseScore = baseScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BaseVector")
    public String baseVector;
    public Cvss withBaseVector(String baseVector) {
        this.baseVector = baseVector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Source")
    public String source;
    public Cvss withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public Cvss withVersion(String version) {
        this.version = version;
        return this;
    }
}
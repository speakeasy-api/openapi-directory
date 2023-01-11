package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Remediation
 * Details about the remediation steps for a finding.
**/
public class Remediation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Recommendation")
    public Recommendation recommendation;
    public Remediation withRecommendation(Recommendation recommendation) {
        this.recommendation = recommendation;
        return this;
    }
}
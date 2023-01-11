package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Severity
 * Provides the numerical and qualitative representations of a finding's severity.
**/
public class Severity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public SeverityDescriptionEnum description;
    public Severity withDescription(SeverityDescriptionEnum description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Long score;
    public Severity withScore(Long score) {
        this.score = score;
        return this;
    }
}
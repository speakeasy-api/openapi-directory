package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeSeverityLevelsResponse
 * The list of severity levels returned by the <a>DescribeSeverityLevels</a> operation.
**/
public class DescribeSeverityLevelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severityLevels")
    public SeverityLevel[] severityLevels;
    public DescribeSeverityLevelsResponse withSeverityLevels(SeverityLevel[] severityLevels) {
        this.severityLevels = severityLevels;
        return this;
    }
}
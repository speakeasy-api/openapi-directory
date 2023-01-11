package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnalysisResult
 * Contains the result of the analysis.
**/
public class AnalysisResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public AnalysisResultLevelEnum level;
    public AnalysisResult withLevel(AnalysisResultLevelEnum level) {
        this.level = level;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locations")
    public AnalysisResultLocation[] locations;
    public AnalysisResult withLocations(AnalysisResultLocation[] locations) {
        this.locations = locations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public AnalysisResult withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AnalysisResult withType(String type) {
        this.type = type;
        return this;
    }
}
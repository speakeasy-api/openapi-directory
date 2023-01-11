package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnalysisResultLocation
 * Contains information that you can use to locate the field in your detector model that the analysis result references.
**/
public class AnalysisResultLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public AnalysisResultLocation withPath(String path) {
        this.path = path;
        return this;
    }
}
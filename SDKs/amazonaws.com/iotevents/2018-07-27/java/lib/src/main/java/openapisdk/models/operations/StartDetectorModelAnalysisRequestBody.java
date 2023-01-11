package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartDetectorModelAnalysisRequestBody {
    @JsonProperty("detectorModelDefinition")
    public StartDetectorModelAnalysisRequestBodyDetectorModelDefinition detectorModelDefinition;
    public StartDetectorModelAnalysisRequestBody withDetectorModelDefinition(StartDetectorModelAnalysisRequestBodyDetectorModelDefinition detectorModelDefinition) {
        this.detectorModelDefinition = detectorModelDefinition;
        return this;
    }
}
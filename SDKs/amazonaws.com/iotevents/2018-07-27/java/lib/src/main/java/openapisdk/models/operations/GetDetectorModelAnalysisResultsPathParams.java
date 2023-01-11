package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDetectorModelAnalysisResultsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=analysisId")
    public String analysisId;
    public GetDetectorModelAnalysisResultsPathParams withAnalysisId(String analysisId) {
        this.analysisId = analysisId;
        return this;
    }
}
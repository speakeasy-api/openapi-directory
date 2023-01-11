package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDetectorModelAnalysisPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=analysisId")
    public String analysisId;
    public DescribeDetectorModelAnalysisPathParams withAnalysisId(String analysisId) {
        this.analysisId = analysisId;
        return this;
    }
}
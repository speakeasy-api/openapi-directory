package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInsightResultsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=InsightArn")
    public String insightArn;
    public GetInsightResultsPathParams withInsightArn(String insightArn) {
        this.insightArn = insightArn;
        return this;
    }
}
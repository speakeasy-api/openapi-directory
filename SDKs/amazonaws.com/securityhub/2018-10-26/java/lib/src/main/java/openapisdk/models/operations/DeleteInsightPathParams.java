package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteInsightPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=InsightArn")
    public String insightArn;
    public DeleteInsightPathParams withInsightArn(String insightArn) {
        this.insightArn = insightArn;
        return this;
    }
}
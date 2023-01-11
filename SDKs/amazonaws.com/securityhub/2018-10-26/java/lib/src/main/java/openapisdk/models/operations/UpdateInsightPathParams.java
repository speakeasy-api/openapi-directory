package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInsightPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=InsightArn")
    public String insightArn;
    public UpdateInsightPathParams withInsightArn(String insightArn) {
        this.insightArn = insightArn;
        return this;
    }
}
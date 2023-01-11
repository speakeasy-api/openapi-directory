package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAnomaliesForInsightPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=InsightId")
    public String insightId;
    public ListAnomaliesForInsightPathParams withInsightId(String insightId) {
        this.insightId = insightId;
        return this;
    }
}
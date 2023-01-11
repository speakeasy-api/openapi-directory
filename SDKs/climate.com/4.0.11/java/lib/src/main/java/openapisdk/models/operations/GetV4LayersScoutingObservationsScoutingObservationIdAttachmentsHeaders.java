package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Limit")
    public Integer xLimit;
    public GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsHeaders withXLimit(Integer xLimit) {
        this.xLimit = xLimit;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Next-Token")
    public String xNextToken;
    public GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsHeaders withXNextToken(String xNextToken) {
        this.xNextToken = xNextToken;
        return this;
    }
}
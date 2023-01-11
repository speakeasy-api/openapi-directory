package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchAspectIdFullsearchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=aspectId")
    public GetSearchAspectIdFullsearchAspectIdEnum aspectId;
    public GetSearchAspectIdFullsearchPathParams withAspectId(GetSearchAspectIdFullsearchAspectIdEnum aspectId) {
        this.aspectId = aspectId;
        return this;
    }
}
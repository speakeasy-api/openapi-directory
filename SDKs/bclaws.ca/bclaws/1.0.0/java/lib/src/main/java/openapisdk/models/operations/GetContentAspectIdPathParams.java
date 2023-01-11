package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContentAspectIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=aspectId")
    public GetContentAspectIdAspectIdEnum aspectId;
    public GetContentAspectIdPathParams withAspectId(GetContentAspectIdAspectIdEnum aspectId) {
        this.aspectId = aspectId;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContentAspectIdCivixDocumentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=aspectId")
    public GetContentAspectIdCivixDocumentIdAspectIdEnum aspectId;
    public GetContentAspectIdCivixDocumentIdPathParams withAspectId(GetContentAspectIdCivixDocumentIdAspectIdEnum aspectId) {
        this.aspectId = aspectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=civixDocumentId")
    public String civixDocumentId;
    public GetContentAspectIdCivixDocumentIdPathParams withCivixDocumentId(String civixDocumentId) {
        this.civixDocumentId = civixDocumentId;
        return this;
    }
}
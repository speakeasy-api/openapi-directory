package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=aspectId")
    public GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdAspectIdEnum aspectId;
    public GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdPathParams withAspectId(GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdAspectIdEnum aspectId) {
        this.aspectId = aspectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=civixDocumentId")
    public String civixDocumentId;
    public GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdPathParams withCivixDocumentId(String civixDocumentId) {
        this.civixDocumentId = civixDocumentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=civixIndexId")
    public String civixIndexId;
    public GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdPathParams withCivixIndexId(String civixIndexId) {
        this.civixIndexId = civixIndexId;
        return this;
    }
}
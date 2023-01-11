package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=aspectId")
    public GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringAspectIdEnum aspectId;
    public GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringPathParams withAspectId(GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringAspectIdEnum aspectId) {
        this.aspectId = aspectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=civixDocumentId")
    public String civixDocumentId;
    public GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringPathParams withCivixDocumentId(String civixDocumentId) {
        this.civixDocumentId = civixDocumentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=civixIndexId")
    public String civixIndexId;
    public GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringPathParams withCivixIndexId(String civixIndexId) {
        this.civixIndexId = civixIndexId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=searchString")
    public String searchString;
    public GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringPathParams withSearchString(String searchString) {
        this.searchString = searchString;
        return this;
    }
}
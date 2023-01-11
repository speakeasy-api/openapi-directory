package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=aspectId")
    public GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringAspectIdEnum aspectId;
    public GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringPathParams withAspectId(GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringAspectIdEnum aspectId) {
        this.aspectId = aspectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=civixDocumentId")
    public String civixDocumentId;
    public GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringPathParams withCivixDocumentId(String civixDocumentId) {
        this.civixDocumentId = civixDocumentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=civixIndexId")
    public String civixIndexId;
    public GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringPathParams withCivixIndexId(String civixIndexId) {
        this.civixIndexId = civixIndexId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=searchString")
    public String searchString;
    public GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringPathParams withSearchString(String searchString) {
        this.searchString = searchString;
        return this;
    }
}
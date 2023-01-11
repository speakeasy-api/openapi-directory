package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=aspectId")
    public GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlAspectIdEnum aspectId;
    public GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlPathParams withAspectId(GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlAspectIdEnum aspectId) {
        this.aspectId = aspectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=civixDocumentId")
    public String civixDocumentId;
    public GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlPathParams withCivixDocumentId(String civixDocumentId) {
        this.civixDocumentId = civixDocumentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=civixIndexId")
    public String civixIndexId;
    public GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlPathParams withCivixIndexId(String civixIndexId) {
        this.civixIndexId = civixIndexId;
        return this;
    }
}
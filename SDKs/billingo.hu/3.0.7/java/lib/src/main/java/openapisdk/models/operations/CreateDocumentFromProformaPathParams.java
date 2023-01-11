package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDocumentFromProformaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public CreateDocumentFromProformaPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}
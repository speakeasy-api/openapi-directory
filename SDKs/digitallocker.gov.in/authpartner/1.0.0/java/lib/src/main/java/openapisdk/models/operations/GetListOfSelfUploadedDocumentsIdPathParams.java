package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListOfSelfUploadedDocumentsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetListOfSelfUploadedDocumentsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}
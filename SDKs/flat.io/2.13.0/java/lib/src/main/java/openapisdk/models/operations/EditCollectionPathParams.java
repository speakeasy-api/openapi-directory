package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection")
    public String collection;
    public EditCollectionPathParams withCollection(String collection) {
        this.collection = collection;
        return this;
    }
}
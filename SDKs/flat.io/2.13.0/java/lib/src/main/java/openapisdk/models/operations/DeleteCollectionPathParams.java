package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection")
    public String collection;
    public DeleteCollectionPathParams withCollection(String collection) {
        this.collection = collection;
        return this;
    }
}
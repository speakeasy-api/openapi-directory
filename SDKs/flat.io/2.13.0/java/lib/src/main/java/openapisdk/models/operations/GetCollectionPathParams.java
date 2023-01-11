package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection")
    public String collection;
    public GetCollectionPathParams withCollection(String collection) {
        this.collection = collection;
        return this;
    }
}
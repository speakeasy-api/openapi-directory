package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntrashCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection")
    public String collection;
    public UntrashCollectionPathParams withCollection(String collection) {
        this.collection = collection;
        return this;
    }
}
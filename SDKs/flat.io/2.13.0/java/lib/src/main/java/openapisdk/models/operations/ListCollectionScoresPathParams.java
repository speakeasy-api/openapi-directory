package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCollectionScoresPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection")
    public String collection;
    public ListCollectionScoresPathParams withCollection(String collection) {
        this.collection = collection;
        return this;
    }
}
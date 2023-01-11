package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListGeofencesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CollectionName")
    public String collectionName;
    public ListGeofencesPathParams withCollectionName(String collectionName) {
        this.collectionName = collectionName;
        return this;
    }
}
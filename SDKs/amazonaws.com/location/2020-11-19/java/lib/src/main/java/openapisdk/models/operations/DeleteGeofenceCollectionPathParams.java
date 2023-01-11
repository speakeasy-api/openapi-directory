package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGeofenceCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CollectionName")
    public String collectionName;
    public DeleteGeofenceCollectionPathParams withCollectionName(String collectionName) {
        this.collectionName = collectionName;
        return this;
    }
}
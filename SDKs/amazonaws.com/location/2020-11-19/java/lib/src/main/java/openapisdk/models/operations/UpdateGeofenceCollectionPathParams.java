package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGeofenceCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CollectionName")
    public String collectionName;
    public UpdateGeofenceCollectionPathParams withCollectionName(String collectionName) {
        this.collectionName = collectionName;
        return this;
    }
}
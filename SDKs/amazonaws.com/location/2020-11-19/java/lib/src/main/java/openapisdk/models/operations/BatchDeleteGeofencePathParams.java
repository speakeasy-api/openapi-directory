package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDeleteGeofencePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CollectionName")
    public String collectionName;
    public BatchDeleteGeofencePathParams withCollectionName(String collectionName) {
        this.collectionName = collectionName;
        return this;
    }
}
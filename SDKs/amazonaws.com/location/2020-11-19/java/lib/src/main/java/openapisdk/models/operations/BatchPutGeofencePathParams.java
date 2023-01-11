package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchPutGeofencePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CollectionName")
    public String collectionName;
    public BatchPutGeofencePathParams withCollectionName(String collectionName) {
        this.collectionName = collectionName;
        return this;
    }
}
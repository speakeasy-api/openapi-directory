package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutGeofencePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CollectionName")
    public String collectionName;
    public PutGeofencePathParams withCollectionName(String collectionName) {
        this.collectionName = collectionName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=GeofenceId")
    public String geofenceId;
    public PutGeofencePathParams withGeofenceId(String geofenceId) {
        this.geofenceId = geofenceId;
        return this;
    }
}
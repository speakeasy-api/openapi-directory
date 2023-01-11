package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeofencePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CollectionName")
    public String collectionName;
    public GetGeofencePathParams withCollectionName(String collectionName) {
        this.collectionName = collectionName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=GeofenceId")
    public String geofenceId;
    public GetGeofencePathParams withGeofenceId(String geofenceId) {
        this.geofenceId = geofenceId;
        return this;
    }
}
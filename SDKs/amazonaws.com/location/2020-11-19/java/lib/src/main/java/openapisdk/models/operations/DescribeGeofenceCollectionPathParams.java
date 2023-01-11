package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeGeofenceCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CollectionName")
    public String collectionName;
    public DescribeGeofenceCollectionPathParams withCollectionName(String collectionName) {
        this.collectionName = collectionName;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchEvaluateGeofencesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=CollectionName")
    public String collectionName;
    public BatchEvaluateGeofencesPathParams withCollectionName(String collectionName) {
        this.collectionName = collectionName;
        return this;
    }
}
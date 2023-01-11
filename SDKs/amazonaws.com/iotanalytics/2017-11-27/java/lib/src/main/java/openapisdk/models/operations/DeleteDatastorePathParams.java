package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDatastorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datastoreName")
    public String datastoreName;
    public DeleteDatastorePathParams withDatastoreName(String datastoreName) {
        this.datastoreName = datastoreName;
        return this;
    }
}
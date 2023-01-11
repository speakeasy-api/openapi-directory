package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDatastorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datastoreName")
    public String datastoreName;
    public UpdateDatastorePathParams withDatastoreName(String datastoreName) {
        this.datastoreName = datastoreName;
        return this;
    }
}
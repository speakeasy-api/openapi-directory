package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDatastorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datastoreName")
    public String datastoreName;
    public DescribeDatastorePathParams withDatastoreName(String datastoreName) {
        this.datastoreName = datastoreName;
        return this;
    }
}
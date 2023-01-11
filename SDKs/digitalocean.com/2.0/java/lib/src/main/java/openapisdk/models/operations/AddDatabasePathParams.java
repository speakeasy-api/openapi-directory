package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddDatabasePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=database_cluster_uuid")
    public String databaseClusterUuid;
    public AddDatabasePathParams withDatabaseClusterUuid(String databaseClusterUuid) {
        this.databaseClusterUuid = databaseClusterUuid;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddConnectionPoolPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=database_cluster_uuid")
    public String databaseClusterUuid;
    public AddConnectionPoolPathParams withDatabaseClusterUuid(String databaseClusterUuid) {
        this.databaseClusterUuid = databaseClusterUuid;
        return this;
    }
}
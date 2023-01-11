package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDatabaseBackupsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=database_cluster_uuid")
    public String databaseClusterUuid;
    public ListDatabaseBackupsPathParams withDatabaseClusterUuid(String databaseClusterUuid) {
        this.databaseClusterUuid = databaseClusterUuid;
        return this;
    }
}
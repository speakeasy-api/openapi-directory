package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResetAuthPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=database_cluster_uuid")
    public String databaseClusterUuid;
    public ResetAuthPathParams withDatabaseClusterUuid(String databaseClusterUuid) {
        this.databaseClusterUuid = databaseClusterUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public ResetAuthPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}
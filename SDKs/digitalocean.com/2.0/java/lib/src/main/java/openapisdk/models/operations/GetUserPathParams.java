package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=database_cluster_uuid")
    public String databaseClusterUuid;
    public GetUserPathParams withDatabaseClusterUuid(String databaseClusterUuid) {
        this.databaseClusterUuid = databaseClusterUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConnectionPoolPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=database_cluster_uuid")
    public String databaseClusterUuid;
    public GetConnectionPoolPathParams withDatabaseClusterUuid(String databaseClusterUuid) {
        this.databaseClusterUuid = databaseClusterUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pool_name")
    public String poolName;
    public GetConnectionPoolPathParams withPoolName(String poolName) {
        this.poolName = poolName;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReplicaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=database_cluster_uuid")
    public String databaseClusterUuid;
    public GetReplicaPathParams withDatabaseClusterUuid(String databaseClusterUuid) {
        this.databaseClusterUuid = databaseClusterUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=replica_name")
    public String replicaName;
    public GetReplicaPathParams withReplicaName(String replicaName) {
        this.replicaName = replicaName;
        return this;
    }
}
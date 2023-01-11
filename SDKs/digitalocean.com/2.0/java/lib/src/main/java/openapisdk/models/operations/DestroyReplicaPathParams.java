package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DestroyReplicaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=database_cluster_uuid")
    public String databaseClusterUuid;
    public DestroyReplicaPathParams withDatabaseClusterUuid(String databaseClusterUuid) {
        this.databaseClusterUuid = databaseClusterUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=replica_name")
    public String replicaName;
    public DestroyReplicaPathParams withReplicaName(String replicaName) {
        this.replicaName = replicaName;
        return this;
    }
}
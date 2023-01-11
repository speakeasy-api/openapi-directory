package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDatabaseClusterRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backup_restore")
    public CreateDatabaseClusterRequestBodyBackupRestore backupRestore;
    public CreateDatabaseClusterRequestBodyInput withBackupRestore(CreateDatabaseClusterRequestBodyBackupRestore backupRestore) {
        this.backupRestore = backupRestore;
        return this;
    }
    @JsonProperty("engine")
    public CreateDatabaseClusterRequestBodyEngineEnum engine;
    public CreateDatabaseClusterRequestBodyInput withEngine(CreateDatabaseClusterRequestBodyEngineEnum engine) {
        this.engine = engine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintenance_window")
    public CreateDatabaseClusterRequestBodyMaintenanceWindowInput maintenanceWindow;
    public CreateDatabaseClusterRequestBodyInput withMaintenanceWindow(CreateDatabaseClusterRequestBodyMaintenanceWindowInput maintenanceWindow) {
        this.maintenanceWindow = maintenanceWindow;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateDatabaseClusterRequestBodyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("num_nodes")
    public Long numNodes;
    public CreateDatabaseClusterRequestBodyInput withNumNodes(Long numNodes) {
        this.numNodes = numNodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_network_uuid")
    public String privateNetworkUuid;
    public CreateDatabaseClusterRequestBodyInput withPrivateNetworkUuid(String privateNetworkUuid) {
        this.privateNetworkUuid = privateNetworkUuid;
        return this;
    }
    @JsonProperty("region")
    public String region;
    public CreateDatabaseClusterRequestBodyInput withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonProperty("size")
    public String size;
    public CreateDatabaseClusterRequestBodyInput withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public CreateDatabaseClusterRequestBodyInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public CreateDatabaseClusterRequestBodyInput withVersion(String version) {
        this.version = version;
        return this;
    }
}
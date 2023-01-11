package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsDynamoDbTableReplica
 * Information about a replica of a DynamoDB table.
**/
public class AwsDynamoDbTableReplica {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GlobalSecondaryIndexes")
    public AwsDynamoDbTableReplicaGlobalSecondaryIndex[] globalSecondaryIndexes;
    public AwsDynamoDbTableReplica withGlobalSecondaryIndexes(AwsDynamoDbTableReplicaGlobalSecondaryIndex[] globalSecondaryIndexes) {
        this.globalSecondaryIndexes = globalSecondaryIndexes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsMasterKeyId")
    public String kmsMasterKeyId;
    public AwsDynamoDbTableReplica withKmsMasterKeyId(String kmsMasterKeyId) {
        this.kmsMasterKeyId = kmsMasterKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisionedThroughputOverride")
    public AwsDynamoDbTableProvisionedThroughputOverride provisionedThroughputOverride;
    public AwsDynamoDbTableReplica withProvisionedThroughputOverride(AwsDynamoDbTableProvisionedThroughputOverride provisionedThroughputOverride) {
        this.provisionedThroughputOverride = provisionedThroughputOverride;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RegionName")
    public String regionName;
    public AwsDynamoDbTableReplica withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicaStatus")
    public String replicaStatus;
    public AwsDynamoDbTableReplica withReplicaStatus(String replicaStatus) {
        this.replicaStatus = replicaStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicaStatusDescription")
    public String replicaStatusDescription;
    public AwsDynamoDbTableReplica withReplicaStatusDescription(String replicaStatusDescription) {
        this.replicaStatusDescription = replicaStatusDescription;
        return this;
    }
}
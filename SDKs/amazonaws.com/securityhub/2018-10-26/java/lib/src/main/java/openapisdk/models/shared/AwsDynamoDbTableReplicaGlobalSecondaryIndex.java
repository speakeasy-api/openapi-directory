package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsDynamoDbTableReplicaGlobalSecondaryIndex
 * Information about a global secondary index for a DynamoDB table replica.
**/
public class AwsDynamoDbTableReplicaGlobalSecondaryIndex {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IndexName")
    public String indexName;
    public AwsDynamoDbTableReplicaGlobalSecondaryIndex withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisionedThroughputOverride")
    public AwsDynamoDbTableProvisionedThroughputOverride provisionedThroughputOverride;
    public AwsDynamoDbTableReplicaGlobalSecondaryIndex withProvisionedThroughputOverride(AwsDynamoDbTableProvisionedThroughputOverride provisionedThroughputOverride) {
        this.provisionedThroughputOverride = provisionedThroughputOverride;
        return this;
    }
}
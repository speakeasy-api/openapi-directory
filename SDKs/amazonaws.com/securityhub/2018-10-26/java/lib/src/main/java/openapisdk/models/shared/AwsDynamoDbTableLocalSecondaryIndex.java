package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsDynamoDbTableLocalSecondaryIndex
 * Information about a local secondary index for a DynamoDB table.
**/
public class AwsDynamoDbTableLocalSecondaryIndex {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IndexArn")
    public String indexArn;
    public AwsDynamoDbTableLocalSecondaryIndex withIndexArn(String indexArn) {
        this.indexArn = indexArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IndexName")
    public String indexName;
    public AwsDynamoDbTableLocalSecondaryIndex withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeySchema")
    public AwsDynamoDbTableKeySchema[] keySchema;
    public AwsDynamoDbTableLocalSecondaryIndex withKeySchema(AwsDynamoDbTableKeySchema[] keySchema) {
        this.keySchema = keySchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Projection")
    public AwsDynamoDbTableProjection projection;
    public AwsDynamoDbTableLocalSecondaryIndex withProjection(AwsDynamoDbTableProjection projection) {
        this.projection = projection;
        return this;
    }
}
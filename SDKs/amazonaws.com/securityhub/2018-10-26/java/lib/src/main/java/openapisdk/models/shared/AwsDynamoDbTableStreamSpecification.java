package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsDynamoDbTableStreamSpecification
 * The current DynamoDB Streams configuration for the table.
**/
public class AwsDynamoDbTableStreamSpecification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamEnabled")
    public Boolean streamEnabled;
    public AwsDynamoDbTableStreamSpecification withStreamEnabled(Boolean streamEnabled) {
        this.streamEnabled = streamEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamViewType")
    public String streamViewType;
    public AwsDynamoDbTableStreamSpecification withStreamViewType(String streamViewType) {
        this.streamViewType = streamViewType;
        return this;
    }
}
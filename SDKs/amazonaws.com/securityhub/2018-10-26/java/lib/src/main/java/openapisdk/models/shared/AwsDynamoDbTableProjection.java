package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsDynamoDbTableProjection
 * For global and local secondary indexes, identifies the attributes that are copied from the table into the index.
**/
public class AwsDynamoDbTableProjection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NonKeyAttributes")
    public String[] nonKeyAttributes;
    public AwsDynamoDbTableProjection withNonKeyAttributes(String[] nonKeyAttributes) {
        this.nonKeyAttributes = nonKeyAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProjectionType")
    public String projectionType;
    public AwsDynamoDbTableProjection withProjectionType(String projectionType) {
        this.projectionType = projectionType;
        return this;
    }
}
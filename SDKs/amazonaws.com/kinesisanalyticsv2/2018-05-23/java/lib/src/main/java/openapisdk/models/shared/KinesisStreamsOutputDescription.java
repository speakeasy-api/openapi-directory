package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KinesisStreamsOutputDescription
 * For an SQL-based Kinesis Data Analytics application's output, describes the Kinesis data stream that is configured as its destination. 
**/
public class KinesisStreamsOutputDescription {
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public KinesisStreamsOutputDescription withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleARN")
    public String roleARN;
    public KinesisStreamsOutputDescription withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}
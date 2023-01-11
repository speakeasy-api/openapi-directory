package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KinesisFirehoseOutputDescription
 * For a SQL-based Kinesis Data Analytics application's output, describes the Kinesis Data Firehose delivery stream that is configured as its destination.
**/
public class KinesisFirehoseOutputDescription {
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public KinesisFirehoseOutputDescription withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleARN")
    public String roleARN;
    public KinesisFirehoseOutputDescription withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}
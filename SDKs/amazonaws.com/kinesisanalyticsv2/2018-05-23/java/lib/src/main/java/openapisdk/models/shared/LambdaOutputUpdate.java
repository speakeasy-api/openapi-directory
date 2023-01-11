package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LambdaOutputUpdate
 * When you update an SQL-based Kinesis Data Analytics application's output configuration using the <a>UpdateApplication</a> operation, provides information about an AWS Lambda function that is configured as the destination.
**/
public class LambdaOutputUpdate {
    @JsonProperty("ResourceARNUpdate")
    public String resourceARNUpdate;
    public LambdaOutputUpdate withResourceArnUpdate(String resourceARNUpdate) {
        this.resourceARNUpdate = resourceARNUpdate;
        return this;
    }
}
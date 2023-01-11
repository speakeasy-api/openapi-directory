package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * KinesisParameters
 * This object enables you to specify a JSON path to extract from the event and use as the partition key for the Amazon Kinesis data stream, so that you can control the shard to which the event goes. If you do not include this parameter, the default is to use the <code>eventId</code> as the partition key.
**/
public class KinesisParameters {
    @JsonProperty("PartitionKeyPath")
    public String partitionKeyPath;
    public KinesisParameters withPartitionKeyPath(String partitionKeyPath) {
        this.partitionKeyPath = partitionKeyPath;
        return this;
    }
}
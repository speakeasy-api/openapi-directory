package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AwsKinesisRuleResponseTarget {
    @JsonProperty("authentication")
    public Object authentication;
    public AwsKinesisRuleResponseTarget withAuthentication(Object authentication) {
        this.authentication = authentication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enveloped")
    public Boolean enveloped;
    public AwsKinesisRuleResponseTarget withEnveloped(Boolean enveloped) {
        this.enveloped = enveloped;
        return this;
    }
    @JsonProperty("format")
    public AwsKinesisRuleResponseTargetFormatEnum format;
    public AwsKinesisRuleResponseTarget withFormat(AwsKinesisRuleResponseTargetFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonProperty("partitionKey")
    public String partitionKey;
    public AwsKinesisRuleResponseTarget withPartitionKey(String partitionKey) {
        this.partitionKey = partitionKey;
        return this;
    }
    @JsonProperty("region")
    public String region;
    public AwsKinesisRuleResponseTarget withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonProperty("streamName")
    public String streamName;
    public AwsKinesisRuleResponseTarget withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}
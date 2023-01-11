package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AwsKinesisRulePostTarget {
    @JsonProperty("authentication")
    public Object authentication;
    public AwsKinesisRulePostTarget withAuthentication(Object authentication) {
        this.authentication = authentication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enveloped")
    public Boolean enveloped;
    public AwsKinesisRulePostTarget withEnveloped(Boolean enveloped) {
        this.enveloped = enveloped;
        return this;
    }
    @JsonProperty("format")
    public AwsKinesisRulePostTargetFormatEnum format;
    public AwsKinesisRulePostTarget withFormat(AwsKinesisRulePostTargetFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonProperty("partitionKey")
    public String partitionKey;
    public AwsKinesisRulePostTarget withPartitionKey(String partitionKey) {
        this.partitionKey = partitionKey;
        return this;
    }
    @JsonProperty("region")
    public String region;
    public AwsKinesisRulePostTarget withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonProperty("streamName")
    public String streamName;
    public AwsKinesisRulePostTarget withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}
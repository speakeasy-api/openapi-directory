package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AwsSqsRulePostTarget {
    @JsonProperty("authentication")
    public Object authentication;
    public AwsSqsRulePostTarget withAuthentication(Object authentication) {
        this.authentication = authentication;
        return this;
    }
    @JsonProperty("awsAccountId")
    public String awsAccountId;
    public AwsSqsRulePostTarget withAwsAccountId(String awsAccountId) {
        this.awsAccountId = awsAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enveloped")
    public Boolean enveloped;
    public AwsSqsRulePostTarget withEnveloped(Boolean enveloped) {
        this.enveloped = enveloped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public String format;
    public AwsSqsRulePostTarget withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonProperty("queueName")
    public String queueName;
    public AwsSqsRulePostTarget withQueueName(String queueName) {
        this.queueName = queueName;
        return this;
    }
    @JsonProperty("region")
    public String region;
    public AwsSqsRulePostTarget withRegion(String region) {
        this.region = region;
        return this;
    }
}
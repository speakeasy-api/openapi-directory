package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsSqsQueueDetails
 * Data about a queue.
**/
public class AwsSqsQueueDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeadLetterTargetArn")
    public String deadLetterTargetArn;
    public AwsSqsQueueDetails withDeadLetterTargetArn(String deadLetterTargetArn) {
        this.deadLetterTargetArn = deadLetterTargetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsDataKeyReusePeriodSeconds")
    public Long kmsDataKeyReusePeriodSeconds;
    public AwsSqsQueueDetails withKmsDataKeyReusePeriodSeconds(Long kmsDataKeyReusePeriodSeconds) {
        this.kmsDataKeyReusePeriodSeconds = kmsDataKeyReusePeriodSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsMasterKeyId")
    public String kmsMasterKeyId;
    public AwsSqsQueueDetails withKmsMasterKeyId(String kmsMasterKeyId) {
        this.kmsMasterKeyId = kmsMasterKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QueueName")
    public String queueName;
    public AwsSqsQueueDetails withQueueName(String queueName) {
        this.queueName = queueName;
        return this;
    }
}
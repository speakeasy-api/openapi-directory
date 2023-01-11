package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeStreamConsumerInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConsumerARN")
    public String consumerARN;
    public DescribeStreamConsumerInput withConsumerArn(String consumerARN) {
        this.consumerARN = consumerARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConsumerName")
    public String consumerName;
    public DescribeStreamConsumerInput withConsumerName(String consumerName) {
        this.consumerName = consumerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamARN")
    public String streamARN;
    public DescribeStreamConsumerInput withStreamArn(String streamARN) {
        this.streamARN = streamARN;
        return this;
    }
}
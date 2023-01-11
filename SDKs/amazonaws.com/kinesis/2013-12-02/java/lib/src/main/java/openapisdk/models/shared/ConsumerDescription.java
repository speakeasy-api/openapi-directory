package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ConsumerDescription
 * An object that represents the details of a registered consumer. This type of object is returned by <a>DescribeStreamConsumer</a>.
**/
public class ConsumerDescription {
    @JsonProperty("ConsumerARN")
    public String consumerARN;
    public ConsumerDescription withConsumerArn(String consumerARN) {
        this.consumerARN = consumerARN;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("ConsumerCreationTimestamp")
    public OffsetDateTime consumerCreationTimestamp;
    public ConsumerDescription withConsumerCreationTimestamp(OffsetDateTime consumerCreationTimestamp) {
        this.consumerCreationTimestamp = consumerCreationTimestamp;
        return this;
    }
    @JsonProperty("ConsumerName")
    public String consumerName;
    public ConsumerDescription withConsumerName(String consumerName) {
        this.consumerName = consumerName;
        return this;
    }
    @JsonProperty("ConsumerStatus")
    public ConsumerStatusEnum consumerStatus;
    public ConsumerDescription withConsumerStatus(ConsumerStatusEnum consumerStatus) {
        this.consumerStatus = consumerStatus;
        return this;
    }
    @JsonProperty("StreamARN")
    public String streamARN;
    public ConsumerDescription withStreamArn(String streamARN) {
        this.streamARN = streamARN;
        return this;
    }
}
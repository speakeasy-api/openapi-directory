package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Consumer
 * An object that represents the details of the consumer you registered. This type of object is returned by <a>RegisterStreamConsumer</a>.
**/
public class Consumer {
    @JsonProperty("ConsumerARN")
    public String consumerARN;
    public Consumer withConsumerArn(String consumerARN) {
        this.consumerARN = consumerARN;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("ConsumerCreationTimestamp")
    public OffsetDateTime consumerCreationTimestamp;
    public Consumer withConsumerCreationTimestamp(OffsetDateTime consumerCreationTimestamp) {
        this.consumerCreationTimestamp = consumerCreationTimestamp;
        return this;
    }
    @JsonProperty("ConsumerName")
    public String consumerName;
    public Consumer withConsumerName(String consumerName) {
        this.consumerName = consumerName;
        return this;
    }
    @JsonProperty("ConsumerStatus")
    public ConsumerStatusEnum consumerStatus;
    public Consumer withConsumerStatus(ConsumerStatusEnum consumerStatus) {
        this.consumerStatus = consumerStatus;
        return this;
    }
}
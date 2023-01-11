package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * DeliveryStreamDescription
 * Contains information about a delivery stream.
**/
public class DeliveryStreamDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreateTimestamp")
    public OffsetDateTime createTimestamp;
    public DeliveryStreamDescription withCreateTimestamp(OffsetDateTime createTimestamp) {
        this.createTimestamp = createTimestamp;
        return this;
    }
    @JsonProperty("DeliveryStreamARN")
    public String deliveryStreamARN;
    public DeliveryStreamDescription withDeliveryStreamArn(String deliveryStreamARN) {
        this.deliveryStreamARN = deliveryStreamARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeliveryStreamEncryptionConfiguration")
    public DeliveryStreamEncryptionConfiguration deliveryStreamEncryptionConfiguration;
    public DeliveryStreamDescription withDeliveryStreamEncryptionConfiguration(DeliveryStreamEncryptionConfiguration deliveryStreamEncryptionConfiguration) {
        this.deliveryStreamEncryptionConfiguration = deliveryStreamEncryptionConfiguration;
        return this;
    }
    @JsonProperty("DeliveryStreamName")
    public String deliveryStreamName;
    public DeliveryStreamDescription withDeliveryStreamName(String deliveryStreamName) {
        this.deliveryStreamName = deliveryStreamName;
        return this;
    }
    @JsonProperty("DeliveryStreamStatus")
    public DeliveryStreamStatusEnum deliveryStreamStatus;
    public DeliveryStreamDescription withDeliveryStreamStatus(DeliveryStreamStatusEnum deliveryStreamStatus) {
        this.deliveryStreamStatus = deliveryStreamStatus;
        return this;
    }
    @JsonProperty("DeliveryStreamType")
    public DeliveryStreamTypeEnum deliveryStreamType;
    public DeliveryStreamDescription withDeliveryStreamType(DeliveryStreamTypeEnum deliveryStreamType) {
        this.deliveryStreamType = deliveryStreamType;
        return this;
    }
    @JsonProperty("Destinations")
    public DestinationDescription[] destinations;
    public DeliveryStreamDescription withDestinations(DestinationDescription[] destinations) {
        this.destinations = destinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureDescription")
    public FailureDescription failureDescription;
    public DeliveryStreamDescription withFailureDescription(FailureDescription failureDescription) {
        this.failureDescription = failureDescription;
        return this;
    }
    @JsonProperty("HasMoreDestinations")
    public Boolean hasMoreDestinations;
    public DeliveryStreamDescription withHasMoreDestinations(Boolean hasMoreDestinations) {
        this.hasMoreDestinations = hasMoreDestinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdateTimestamp")
    public OffsetDateTime lastUpdateTimestamp;
    public DeliveryStreamDescription withLastUpdateTimestamp(OffsetDateTime lastUpdateTimestamp) {
        this.lastUpdateTimestamp = lastUpdateTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Source")
    public SourceDescription source;
    public DeliveryStreamDescription withSource(SourceDescription source) {
        this.source = source;
        return this;
    }
    @JsonProperty("VersionId")
    public String versionId;
    public DeliveryStreamDescription withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
}
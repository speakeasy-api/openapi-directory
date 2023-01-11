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
 * AggregatedSourceStatus
 * The current sync status between the source and the aggregator account.
**/
public class AggregatedSourceStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsRegion")
    public String awsRegion;
    public AggregatedSourceStatus withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastErrorCode")
    public String lastErrorCode;
    public AggregatedSourceStatus withLastErrorCode(String lastErrorCode) {
        this.lastErrorCode = lastErrorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastErrorMessage")
    public String lastErrorMessage;
    public AggregatedSourceStatus withLastErrorMessage(String lastErrorMessage) {
        this.lastErrorMessage = lastErrorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastUpdateStatus")
    public AggregatedSourceStatusTypeEnum lastUpdateStatus;
    public AggregatedSourceStatus withLastUpdateStatus(AggregatedSourceStatusTypeEnum lastUpdateStatus) {
        this.lastUpdateStatus = lastUpdateStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdateTime")
    public OffsetDateTime lastUpdateTime;
    public AggregatedSourceStatus withLastUpdateTime(OffsetDateTime lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceId")
    public String sourceId;
    public AggregatedSourceStatus withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceType")
    public AggregatedSourceTypeEnum sourceType;
    public AggregatedSourceStatus withSourceType(AggregatedSourceTypeEnum sourceType) {
        this.sourceType = sourceType;
        return this;
    }
}
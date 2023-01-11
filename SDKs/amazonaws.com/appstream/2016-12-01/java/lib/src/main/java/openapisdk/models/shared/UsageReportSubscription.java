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
 * UsageReportSubscription
 * Describes information about the usage report subscription.
**/
public class UsageReportSubscription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastGeneratedReportDate")
    public OffsetDateTime lastGeneratedReportDate;
    public UsageReportSubscription withLastGeneratedReportDate(OffsetDateTime lastGeneratedReportDate) {
        this.lastGeneratedReportDate = lastGeneratedReportDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BucketName")
    public String s3BucketName;
    public UsageReportSubscription withS3BucketName(String s3BucketName) {
        this.s3BucketName = s3BucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schedule")
    public UsageReportScheduleEnum schedule;
    public UsageReportSubscription withSchedule(UsageReportScheduleEnum schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubscriptionErrors")
    public LastReportGenerationExecutionError[] subscriptionErrors;
    public UsageReportSubscription withSubscriptionErrors(LastReportGenerationExecutionError[] subscriptionErrors) {
        this.subscriptionErrors = subscriptionErrors;
        return this;
    }
}
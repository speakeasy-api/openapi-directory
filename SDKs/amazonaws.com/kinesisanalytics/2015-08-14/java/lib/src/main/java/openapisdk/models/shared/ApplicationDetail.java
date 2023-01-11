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
 * ApplicationDetail
 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides a description of the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configuration.</p>
**/
public class ApplicationDetail {
    @JsonProperty("ApplicationARN")
    public String applicationARN;
    public ApplicationDetail withApplicationArn(String applicationARN) {
        this.applicationARN = applicationARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationCode")
    public String applicationCode;
    public ApplicationDetail withApplicationCode(String applicationCode) {
        this.applicationCode = applicationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationDescription")
    public String applicationDescription;
    public ApplicationDetail withApplicationDescription(String applicationDescription) {
        this.applicationDescription = applicationDescription;
        return this;
    }
    @JsonProperty("ApplicationName")
    public String applicationName;
    public ApplicationDetail withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonProperty("ApplicationStatus")
    public ApplicationStatusEnum applicationStatus;
    public ApplicationDetail withApplicationStatus(ApplicationStatusEnum applicationStatus) {
        this.applicationStatus = applicationStatus;
        return this;
    }
    @JsonProperty("ApplicationVersionId")
    public Long applicationVersionId;
    public ApplicationDetail withApplicationVersionId(Long applicationVersionId) {
        this.applicationVersionId = applicationVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLoggingOptionDescriptions")
    public CloudWatchLoggingOptionDescription[] cloudWatchLoggingOptionDescriptions;
    public ApplicationDetail withCloudWatchLoggingOptionDescriptions(CloudWatchLoggingOptionDescription[] cloudWatchLoggingOptionDescriptions) {
        this.cloudWatchLoggingOptionDescriptions = cloudWatchLoggingOptionDescriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreateTimestamp")
    public OffsetDateTime createTimestamp;
    public ApplicationDetail withCreateTimestamp(OffsetDateTime createTimestamp) {
        this.createTimestamp = createTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputDescriptions")
    public InputDescription[] inputDescriptions;
    public ApplicationDetail withInputDescriptions(InputDescription[] inputDescriptions) {
        this.inputDescriptions = inputDescriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdateTimestamp")
    public OffsetDateTime lastUpdateTimestamp;
    public ApplicationDetail withLastUpdateTimestamp(OffsetDateTime lastUpdateTimestamp) {
        this.lastUpdateTimestamp = lastUpdateTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputDescriptions")
    public OutputDescription[] outputDescriptions;
    public ApplicationDetail withOutputDescriptions(OutputDescription[] outputDescriptions) {
        this.outputDescriptions = outputDescriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReferenceDataSourceDescriptions")
    public ReferenceDataSourceDescription[] referenceDataSourceDescriptions;
    public ApplicationDetail withReferenceDataSourceDescriptions(ReferenceDataSourceDescription[] referenceDataSourceDescriptions) {
        this.referenceDataSourceDescriptions = referenceDataSourceDescriptions;
        return this;
    }
}
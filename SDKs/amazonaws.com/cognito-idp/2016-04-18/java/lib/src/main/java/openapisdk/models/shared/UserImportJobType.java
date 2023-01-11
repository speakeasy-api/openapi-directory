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
 * UserImportJobType
 * The user import job type.
**/
public class UserImportJobType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLogsRoleArn")
    public String cloudWatchLogsRoleArn;
    public UserImportJobType withCloudWatchLogsRoleArn(String cloudWatchLogsRoleArn) {
        this.cloudWatchLogsRoleArn = cloudWatchLogsRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CompletionDate")
    public OffsetDateTime completionDate;
    public UserImportJobType withCompletionDate(OffsetDateTime completionDate) {
        this.completionDate = completionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompletionMessage")
    public String completionMessage;
    public UserImportJobType withCompletionMessage(String completionMessage) {
        this.completionMessage = completionMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationDate")
    public OffsetDateTime creationDate;
    public UserImportJobType withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedUsers")
    public Long failedUsers;
    public UserImportJobType withFailedUsers(Long failedUsers) {
        this.failedUsers = failedUsers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImportedUsers")
    public Long importedUsers;
    public UserImportJobType withImportedUsers(Long importedUsers) {
        this.importedUsers = importedUsers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobId")
    public String jobId;
    public UserImportJobType withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobName")
    public String jobName;
    public UserImportJobType withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreSignedUrl")
    public String preSignedUrl;
    public UserImportJobType withPreSignedUrl(String preSignedUrl) {
        this.preSignedUrl = preSignedUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SkippedUsers")
    public Long skippedUsers;
    public UserImportJobType withSkippedUsers(Long skippedUsers) {
        this.skippedUsers = skippedUsers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartDate")
    public OffsetDateTime startDate;
    public UserImportJobType withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public UserImportJobStatusTypeEnum status;
    public UserImportJobType withStatus(UserImportJobStatusTypeEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public UserImportJobType withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}
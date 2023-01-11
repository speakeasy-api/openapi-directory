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
 * ReplicationTaskAssessmentRun
 * <p>Provides information that describes a premigration assessment run that you have started using the <code>StartReplicationTaskAssessmentRun</code> operation.</p> <p>Some of the information appears based on other operations that can return the <code>ReplicationTaskAssessmentRun</code> object.</p>
**/
public class ReplicationTaskAssessmentRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssessmentProgress")
    public ReplicationTaskAssessmentRunProgress assessmentProgress;
    public ReplicationTaskAssessmentRun withAssessmentProgress(ReplicationTaskAssessmentRunProgress assessmentProgress) {
        this.assessmentProgress = assessmentProgress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssessmentRunName")
    public String assessmentRunName;
    public ReplicationTaskAssessmentRun withAssessmentRunName(String assessmentRunName) {
        this.assessmentRunName = assessmentRunName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastFailureMessage")
    public String lastFailureMessage;
    public ReplicationTaskAssessmentRun withLastFailureMessage(String lastFailureMessage) {
        this.lastFailureMessage = lastFailureMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskArn")
    public String replicationTaskArn;
    public ReplicationTaskAssessmentRun withReplicationTaskArn(String replicationTaskArn) {
        this.replicationTaskArn = replicationTaskArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskAssessmentRunArn")
    public String replicationTaskAssessmentRunArn;
    public ReplicationTaskAssessmentRun withReplicationTaskAssessmentRunArn(String replicationTaskAssessmentRunArn) {
        this.replicationTaskAssessmentRunArn = replicationTaskAssessmentRunArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ReplicationTaskAssessmentRunCreationDate")
    public OffsetDateTime replicationTaskAssessmentRunCreationDate;
    public ReplicationTaskAssessmentRun withReplicationTaskAssessmentRunCreationDate(OffsetDateTime replicationTaskAssessmentRunCreationDate) {
        this.replicationTaskAssessmentRunCreationDate = replicationTaskAssessmentRunCreationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResultEncryptionMode")
    public String resultEncryptionMode;
    public ReplicationTaskAssessmentRun withResultEncryptionMode(String resultEncryptionMode) {
        this.resultEncryptionMode = resultEncryptionMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResultKmsKeyArn")
    public String resultKmsKeyArn;
    public ReplicationTaskAssessmentRun withResultKmsKeyArn(String resultKmsKeyArn) {
        this.resultKmsKeyArn = resultKmsKeyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResultLocationBucket")
    public String resultLocationBucket;
    public ReplicationTaskAssessmentRun withResultLocationBucket(String resultLocationBucket) {
        this.resultLocationBucket = resultLocationBucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResultLocationFolder")
    public String resultLocationFolder;
    public ReplicationTaskAssessmentRun withResultLocationFolder(String resultLocationFolder) {
        this.resultLocationFolder = resultLocationFolder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceAccessRoleArn")
    public String serviceAccessRoleArn;
    public ReplicationTaskAssessmentRun withServiceAccessRoleArn(String serviceAccessRoleArn) {
        this.serviceAccessRoleArn = serviceAccessRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public ReplicationTaskAssessmentRun withStatus(String status) {
        this.status = status;
        return this;
    }
}
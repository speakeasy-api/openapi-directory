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
 * ReplicationTaskAssessmentResult
 *  The task assessment report in JSON format. 
**/
public class ReplicationTaskAssessmentResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssessmentResults")
    public String assessmentResults;
    public ReplicationTaskAssessmentResult withAssessmentResults(String assessmentResults) {
        this.assessmentResults = assessmentResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssessmentResultsFile")
    public String assessmentResultsFile;
    public ReplicationTaskAssessmentResult withAssessmentResultsFile(String assessmentResultsFile) {
        this.assessmentResultsFile = assessmentResultsFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssessmentStatus")
    public String assessmentStatus;
    public ReplicationTaskAssessmentResult withAssessmentStatus(String assessmentStatus) {
        this.assessmentStatus = assessmentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskArn")
    public String replicationTaskArn;
    public ReplicationTaskAssessmentResult withReplicationTaskArn(String replicationTaskArn) {
        this.replicationTaskArn = replicationTaskArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskIdentifier")
    public String replicationTaskIdentifier;
    public ReplicationTaskAssessmentResult withReplicationTaskIdentifier(String replicationTaskIdentifier) {
        this.replicationTaskIdentifier = replicationTaskIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ReplicationTaskLastAssessmentDate")
    public OffsetDateTime replicationTaskLastAssessmentDate;
    public ReplicationTaskAssessmentResult withReplicationTaskLastAssessmentDate(OffsetDateTime replicationTaskLastAssessmentDate) {
        this.replicationTaskLastAssessmentDate = replicationTaskLastAssessmentDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3ObjectUrl")
    public String s3ObjectUrl;
    public ReplicationTaskAssessmentResult withS3ObjectUrl(String s3ObjectUrl) {
        this.s3ObjectUrl = s3ObjectUrl;
        return this;
    }
}
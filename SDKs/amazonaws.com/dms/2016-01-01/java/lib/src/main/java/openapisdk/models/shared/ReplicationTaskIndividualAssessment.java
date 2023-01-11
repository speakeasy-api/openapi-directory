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
 * ReplicationTaskIndividualAssessment
 * Provides information that describes an individual assessment from a premigration assessment run.
**/
public class ReplicationTaskIndividualAssessment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IndividualAssessmentName")
    public String individualAssessmentName;
    public ReplicationTaskIndividualAssessment withIndividualAssessmentName(String individualAssessmentName) {
        this.individualAssessmentName = individualAssessmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskAssessmentRunArn")
    public String replicationTaskAssessmentRunArn;
    public ReplicationTaskIndividualAssessment withReplicationTaskAssessmentRunArn(String replicationTaskAssessmentRunArn) {
        this.replicationTaskAssessmentRunArn = replicationTaskAssessmentRunArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskIndividualAssessmentArn")
    public String replicationTaskIndividualAssessmentArn;
    public ReplicationTaskIndividualAssessment withReplicationTaskIndividualAssessmentArn(String replicationTaskIndividualAssessmentArn) {
        this.replicationTaskIndividualAssessmentArn = replicationTaskIndividualAssessmentArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ReplicationTaskIndividualAssessmentStartDate")
    public OffsetDateTime replicationTaskIndividualAssessmentStartDate;
    public ReplicationTaskIndividualAssessment withReplicationTaskIndividualAssessmentStartDate(OffsetDateTime replicationTaskIndividualAssessmentStartDate) {
        this.replicationTaskIndividualAssessmentStartDate = replicationTaskIndividualAssessmentStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public ReplicationTaskIndividualAssessment withStatus(String status) {
        this.status = status;
        return this;
    }
}
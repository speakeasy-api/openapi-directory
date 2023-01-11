package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeApplicableIndividualAssessmentsMessage
 * <p/>
**/
public class DescribeApplicableIndividualAssessmentsMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribeApplicableIndividualAssessmentsMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxRecords")
    public Long maxRecords;
    public DescribeApplicableIndividualAssessmentsMessage withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MigrationType")
    public MigrationTypeValueEnum migrationType;
    public DescribeApplicableIndividualAssessmentsMessage withMigrationType(MigrationTypeValueEnum migrationType) {
        this.migrationType = migrationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstanceArn")
    public String replicationInstanceArn;
    public DescribeApplicableIndividualAssessmentsMessage withReplicationInstanceArn(String replicationInstanceArn) {
        this.replicationInstanceArn = replicationInstanceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationTaskArn")
    public String replicationTaskArn;
    public DescribeApplicableIndividualAssessmentsMessage withReplicationTaskArn(String replicationTaskArn) {
        this.replicationTaskArn = replicationTaskArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceEngineName")
    public String sourceEngineName;
    public DescribeApplicableIndividualAssessmentsMessage withSourceEngineName(String sourceEngineName) {
        this.sourceEngineName = sourceEngineName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetEngineName")
    public String targetEngineName;
    public DescribeApplicableIndividualAssessmentsMessage withTargetEngineName(String targetEngineName) {
        this.targetEngineName = targetEngineName;
        return this;
    }
}
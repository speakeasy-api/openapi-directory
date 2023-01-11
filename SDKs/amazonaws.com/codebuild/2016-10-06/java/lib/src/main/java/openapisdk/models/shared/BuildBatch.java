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
 * BuildBatch
 * Contains information about a batch build.
**/
public class BuildBatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public BuildBatch withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifacts")
    public BuildArtifacts artifacts;
    public BuildBatch withArtifacts(BuildArtifacts artifacts) {
        this.artifacts = artifacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildBatchConfig")
    public ProjectBuildBatchConfig buildBatchConfig;
    public BuildBatch withBuildBatchConfig(ProjectBuildBatchConfig buildBatchConfig) {
        this.buildBatchConfig = buildBatchConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildBatchNumber")
    public Long buildBatchNumber;
    public BuildBatch withBuildBatchNumber(Long buildBatchNumber) {
        this.buildBatchNumber = buildBatchNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildBatchStatus")
    public StatusTypeEnum buildBatchStatus;
    public BuildBatch withBuildBatchStatus(StatusTypeEnum buildBatchStatus) {
        this.buildBatchStatus = buildBatchStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildGroups")
    public BuildGroup[] buildGroups;
    public BuildBatch withBuildGroups(BuildGroup[] buildGroups) {
        this.buildGroups = buildGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildTimeoutInMinutes")
    public Long buildTimeoutInMinutes;
    public BuildBatch withBuildTimeoutInMinutes(Long buildTimeoutInMinutes) {
        this.buildTimeoutInMinutes = buildTimeoutInMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cache")
    public ProjectCache cache;
    public BuildBatch withCache(ProjectCache cache) {
        this.cache = cache;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complete")
    public Boolean complete;
    public BuildBatch withComplete(Boolean complete) {
        this.complete = complete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentPhase")
    public String currentPhase;
    public BuildBatch withCurrentPhase(String currentPhase) {
        this.currentPhase = currentPhase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debugSessionEnabled")
    public Boolean debugSessionEnabled;
    public BuildBatch withDebugSessionEnabled(Boolean debugSessionEnabled) {
        this.debugSessionEnabled = debugSessionEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionKey")
    public String encryptionKey;
    public BuildBatch withEncryptionKey(String encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public BuildBatch withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public ProjectEnvironment environment;
    public BuildBatch withEnvironment(ProjectEnvironment environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileSystemLocations")
    public ProjectFileSystemLocation[] fileSystemLocations;
    public BuildBatch withFileSystemLocations(ProjectFileSystemLocation[] fileSystemLocations) {
        this.fileSystemLocations = fileSystemLocations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public BuildBatch withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initiator")
    public String initiator;
    public BuildBatch withInitiator(String initiator) {
        this.initiator = initiator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logConfig")
    public LogsConfig logConfig;
    public BuildBatch withLogConfig(LogsConfig logConfig) {
        this.logConfig = logConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phases")
    public BuildBatchPhase[] phases;
    public BuildBatch withPhases(BuildBatchPhase[] phases) {
        this.phases = phases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectName")
    public String projectName;
    public BuildBatch withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queuedTimeoutInMinutes")
    public Long queuedTimeoutInMinutes;
    public BuildBatch withQueuedTimeoutInMinutes(Long queuedTimeoutInMinutes) {
        this.queuedTimeoutInMinutes = queuedTimeoutInMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolvedSourceVersion")
    public String resolvedSourceVersion;
    public BuildBatch withResolvedSourceVersion(String resolvedSourceVersion) {
        this.resolvedSourceVersion = resolvedSourceVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryArtifacts")
    public BuildArtifacts[] secondaryArtifacts;
    public BuildBatch withSecondaryArtifacts(BuildArtifacts[] secondaryArtifacts) {
        this.secondaryArtifacts = secondaryArtifacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondarySourceVersions")
    public ProjectSourceVersion[] secondarySourceVersions;
    public BuildBatch withSecondarySourceVersions(ProjectSourceVersion[] secondarySourceVersions) {
        this.secondarySourceVersions = secondarySourceVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondarySources")
    public ProjectSource[] secondarySources;
    public BuildBatch withSecondarySources(ProjectSource[] secondarySources) {
        this.secondarySources = secondarySources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceRole")
    public String serviceRole;
    public BuildBatch withServiceRole(String serviceRole) {
        this.serviceRole = serviceRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public ProjectSource source;
    public BuildBatch withSource(ProjectSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceVersion")
    public String sourceVersion;
    public BuildBatch withSourceVersion(String sourceVersion) {
        this.sourceVersion = sourceVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public BuildBatch withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcConfig")
    public VpcConfig vpcConfig;
    public BuildBatch withVpcConfig(VpcConfig vpcConfig) {
        this.vpcConfig = vpcConfig;
        return this;
    }
}
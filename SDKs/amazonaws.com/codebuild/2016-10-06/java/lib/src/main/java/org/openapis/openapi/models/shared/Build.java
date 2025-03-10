/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * Build - Information about a build.
 */
public class Build {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;

    public Build withArn(String arn) {
        this.arn = arn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifacts")
    public BuildArtifacts artifacts;

    public Build withArtifacts(BuildArtifacts artifacts) {
        this.artifacts = artifacts;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildBatchArn")
    public String buildBatchArn;

    public Build withBuildBatchArn(String buildBatchArn) {
        this.buildBatchArn = buildBatchArn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildComplete")
    public Boolean buildComplete;

    public Build withBuildComplete(Boolean buildComplete) {
        this.buildComplete = buildComplete;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildNumber")
    public Long buildNumber;

    public Build withBuildNumber(Long buildNumber) {
        this.buildNumber = buildNumber;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildStatus")
    public StatusTypeEnum buildStatus;

    public Build withBuildStatus(StatusTypeEnum buildStatus) {
        this.buildStatus = buildStatus;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cache")
    public ProjectCache cache;

    public Build withCache(ProjectCache cache) {
        this.cache = cache;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentPhase")
    public String currentPhase;

    public Build withCurrentPhase(String currentPhase) {
        this.currentPhase = currentPhase;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debugSession")
    public DebugSession debugSession;

    public Build withDebugSession(DebugSession debugSession) {
        this.debugSession = debugSession;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionKey")
    public String encryptionKey;

    public Build withEncryptionKey(String encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;

    public Build withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public ProjectEnvironment environment;

    public Build withEnvironment(ProjectEnvironment environment) {
        this.environment = environment;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportedEnvironmentVariables")
    public ExportedEnvironmentVariable[] exportedEnvironmentVariables;

    public Build withExportedEnvironmentVariables(ExportedEnvironmentVariable[] exportedEnvironmentVariables) {
        this.exportedEnvironmentVariables = exportedEnvironmentVariables;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileSystemLocations")
    public ProjectFileSystemLocation[] fileSystemLocations;

    public Build withFileSystemLocations(ProjectFileSystemLocation[] fileSystemLocations) {
        this.fileSystemLocations = fileSystemLocations;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public Build withId(String id) {
        this.id = id;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initiator")
    public String initiator;

    public Build withInitiator(String initiator) {
        this.initiator = initiator;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logs")
    public LogsLocation logs;

    public Build withLogs(LogsLocation logs) {
        this.logs = logs;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkInterface")
    public NetworkInterface networkInterface;

    public Build withNetworkInterface(NetworkInterface networkInterface) {
        this.networkInterface = networkInterface;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phases")
    public BuildPhase[] phases;

    public Build withPhases(BuildPhase[] phases) {
        this.phases = phases;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectName")
    public String projectName;

    public Build withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queuedTimeoutInMinutes")
    public Long queuedTimeoutInMinutes;

    public Build withQueuedTimeoutInMinutes(Long queuedTimeoutInMinutes) {
        this.queuedTimeoutInMinutes = queuedTimeoutInMinutes;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportArns")
    public String[] reportArns;

    public Build withReportArns(String[] reportArns) {
        this.reportArns = reportArns;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolvedSourceVersion")
    public String resolvedSourceVersion;

    public Build withResolvedSourceVersion(String resolvedSourceVersion) {
        this.resolvedSourceVersion = resolvedSourceVersion;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryArtifacts")
    public BuildArtifacts[] secondaryArtifacts;

    public Build withSecondaryArtifacts(BuildArtifacts[] secondaryArtifacts) {
        this.secondaryArtifacts = secondaryArtifacts;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondarySourceVersions")
    public ProjectSourceVersion[] secondarySourceVersions;

    public Build withSecondarySourceVersions(ProjectSourceVersion[] secondarySourceVersions) {
        this.secondarySourceVersions = secondarySourceVersions;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondarySources")
    public ProjectSource[] secondarySources;

    public Build withSecondarySources(ProjectSource[] secondarySources) {
        this.secondarySources = secondarySources;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceRole")
    public String serviceRole;

    public Build withServiceRole(String serviceRole) {
        this.serviceRole = serviceRole;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public ProjectSource source;

    public Build withSource(ProjectSource source) {
        this.source = source;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceVersion")
    public String sourceVersion;

    public Build withSourceVersion(String sourceVersion) {
        this.sourceVersion = sourceVersion;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;

    public Build withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutInMinutes")
    public Long timeoutInMinutes;

    public Build withTimeoutInMinutes(Long timeoutInMinutes) {
        this.timeoutInMinutes = timeoutInMinutes;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcConfig")
    public VpcConfig vpcConfig;

    public Build withVpcConfig(VpcConfig vpcConfig) {
        this.vpcConfig = vpcConfig;
        return this;
    }
    
    public Build(){}
}

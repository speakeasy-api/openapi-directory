package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatchSummary
 * Provides an overview of the patch compliance status for an instance against a selected compliance standard.
**/
public class PatchSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedCount")
    public Long failedCount;
    public PatchSummary withFailedCount(Long failedCount) {
        this.failedCount = failedCount;
        return this;
    }
    @JsonProperty("Id")
    public String id;
    public PatchSummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstalledCount")
    public Long installedCount;
    public PatchSummary withInstalledCount(Long installedCount) {
        this.installedCount = installedCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstalledOtherCount")
    public Long installedOtherCount;
    public PatchSummary withInstalledOtherCount(Long installedOtherCount) {
        this.installedOtherCount = installedOtherCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstalledPendingReboot")
    public Long installedPendingReboot;
    public PatchSummary withInstalledPendingReboot(Long installedPendingReboot) {
        this.installedPendingReboot = installedPendingReboot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstalledRejectedCount")
    public Long installedRejectedCount;
    public PatchSummary withInstalledRejectedCount(Long installedRejectedCount) {
        this.installedRejectedCount = installedRejectedCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MissingCount")
    public Long missingCount;
    public PatchSummary withMissingCount(Long missingCount) {
        this.missingCount = missingCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Operation")
    public String operation;
    public PatchSummary withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OperationEndTime")
    public String operationEndTime;
    public PatchSummary withOperationEndTime(String operationEndTime) {
        this.operationEndTime = operationEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OperationStartTime")
    public String operationStartTime;
    public PatchSummary withOperationStartTime(String operationStartTime) {
        this.operationStartTime = operationStartTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RebootOption")
    public String rebootOption;
    public PatchSummary withRebootOption(String rebootOption) {
        this.rebootOption = rebootOption;
        return this;
    }
}
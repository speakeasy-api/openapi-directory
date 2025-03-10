/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AwsBackupRecoveryPointCreatedByDetails - Contains information about the backup plan and rule that Backup used to initiate the recovery point backup. 
 */
public class AwsBackupRecoveryPointCreatedByDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BackupPlanArn")
    public String backupPlanArn;

    public AwsBackupRecoveryPointCreatedByDetails withBackupPlanArn(String backupPlanArn) {
        this.backupPlanArn = backupPlanArn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BackupPlanId")
    public String backupPlanId;

    public AwsBackupRecoveryPointCreatedByDetails withBackupPlanId(String backupPlanId) {
        this.backupPlanId = backupPlanId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BackupPlanVersion")
    public String backupPlanVersion;

    public AwsBackupRecoveryPointCreatedByDetails withBackupPlanVersion(String backupPlanVersion) {
        this.backupPlanVersion = backupPlanVersion;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BackupRuleId")
    public String backupRuleId;

    public AwsBackupRecoveryPointCreatedByDetails withBackupRuleId(String backupRuleId) {
        this.backupRuleId = backupRuleId;
        return this;
    }
    
    public AwsBackupRecoveryPointCreatedByDetails(){}
}

package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsDynamoDbTableRestoreSummary
 * Information about the restore for the table.
**/
public class AwsDynamoDbTableRestoreSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RestoreDateTime")
    public String restoreDateTime;
    public AwsDynamoDbTableRestoreSummary withRestoreDateTime(String restoreDateTime) {
        this.restoreDateTime = restoreDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RestoreInProgress")
    public Boolean restoreInProgress;
    public AwsDynamoDbTableRestoreSummary withRestoreInProgress(Boolean restoreInProgress) {
        this.restoreInProgress = restoreInProgress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceBackupArn")
    public String sourceBackupArn;
    public AwsDynamoDbTableRestoreSummary withSourceBackupArn(String sourceBackupArn) {
        this.sourceBackupArn = sourceBackupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceTableArn")
    public String sourceTableArn;
    public AwsDynamoDbTableRestoreSummary withSourceTableArn(String sourceTableArn) {
        this.sourceTableArn = sourceTableArn;
        return this;
    }
}
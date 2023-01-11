package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobExecutionSettings
 * Provides information about when a transcription job should be executed.
**/
public class JobExecutionSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowDeferredExecution")
    public Boolean allowDeferredExecution;
    public JobExecutionSettings withAllowDeferredExecution(Boolean allowDeferredExecution) {
        this.allowDeferredExecution = allowDeferredExecution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataAccessRoleArn")
    public String dataAccessRoleArn;
    public JobExecutionSettings withDataAccessRoleArn(String dataAccessRoleArn) {
        this.dataAccessRoleArn = dataAccessRoleArn;
        return this;
    }
}
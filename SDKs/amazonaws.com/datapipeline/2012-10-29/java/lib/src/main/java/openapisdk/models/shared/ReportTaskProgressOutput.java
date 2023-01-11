package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ReportTaskProgressOutput
 * Contains the output of ReportTaskProgress.
**/
public class ReportTaskProgressOutput {
    @JsonProperty("canceled")
    public Boolean canceled;
    public ReportTaskProgressOutput withCanceled(Boolean canceled) {
        this.canceled = canceled;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DisassociateS3ResourcesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedS3Resources")
    public FailedS3Resource[] failedS3Resources;
    public DisassociateS3ResourcesResult withFailedS3Resources(FailedS3Resource[] failedS3Resources) {
        this.failedS3Resources = failedS3Resources;
        return this;
    }
}
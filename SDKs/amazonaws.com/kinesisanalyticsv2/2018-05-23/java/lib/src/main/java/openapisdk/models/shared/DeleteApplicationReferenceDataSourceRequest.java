package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteApplicationReferenceDataSourceRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public DeleteApplicationReferenceDataSourceRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonProperty("CurrentApplicationVersionId")
    public Long currentApplicationVersionId;
    public DeleteApplicationReferenceDataSourceRequest withCurrentApplicationVersionId(Long currentApplicationVersionId) {
        this.currentApplicationVersionId = currentApplicationVersionId;
        return this;
    }
    @JsonProperty("ReferenceId")
    public String referenceId;
    public DeleteApplicationReferenceDataSourceRequest withReferenceId(String referenceId) {
        this.referenceId = referenceId;
        return this;
    }
}
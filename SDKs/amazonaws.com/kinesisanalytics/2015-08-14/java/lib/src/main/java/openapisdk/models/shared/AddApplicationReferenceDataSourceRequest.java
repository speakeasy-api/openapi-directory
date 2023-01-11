package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AddApplicationReferenceDataSourceRequest
 * <p/>
**/
public class AddApplicationReferenceDataSourceRequest {
    @JsonProperty("ApplicationName")
    public String applicationName;
    public AddApplicationReferenceDataSourceRequest withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonProperty("CurrentApplicationVersionId")
    public Long currentApplicationVersionId;
    public AddApplicationReferenceDataSourceRequest withCurrentApplicationVersionId(Long currentApplicationVersionId) {
        this.currentApplicationVersionId = currentApplicationVersionId;
        return this;
    }
    @JsonProperty("ReferenceDataSource")
    public ReferenceDataSource referenceDataSource;
    public AddApplicationReferenceDataSourceRequest withReferenceDataSource(ReferenceDataSource referenceDataSource) {
        this.referenceDataSource = referenceDataSource;
        return this;
    }
}
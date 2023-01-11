package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddApplicationReferenceDataSourceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationARN")
    public String applicationARN;
    public AddApplicationReferenceDataSourceResponse withApplicationArn(String applicationARN) {
        this.applicationARN = applicationARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationVersionId")
    public Long applicationVersionId;
    public AddApplicationReferenceDataSourceResponse withApplicationVersionId(Long applicationVersionId) {
        this.applicationVersionId = applicationVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReferenceDataSourceDescriptions")
    public ReferenceDataSourceDescription[] referenceDataSourceDescriptions;
    public AddApplicationReferenceDataSourceResponse withReferenceDataSourceDescriptions(ReferenceDataSourceDescription[] referenceDataSourceDescriptions) {
        this.referenceDataSourceDescriptions = referenceDataSourceDescriptions;
        return this;
    }
}
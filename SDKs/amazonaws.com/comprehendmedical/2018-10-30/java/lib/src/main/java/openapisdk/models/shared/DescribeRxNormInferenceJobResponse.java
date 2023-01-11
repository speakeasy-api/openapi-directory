package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeRxNormInferenceJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComprehendMedicalAsyncJobProperties")
    public ComprehendMedicalAsyncJobProperties comprehendMedicalAsyncJobProperties;
    public DescribeRxNormInferenceJobResponse withComprehendMedicalAsyncJobProperties(ComprehendMedicalAsyncJobProperties comprehendMedicalAsyncJobProperties) {
        this.comprehendMedicalAsyncJobProperties = comprehendMedicalAsyncJobProperties;
        return this;
    }
}
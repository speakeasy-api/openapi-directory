package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateOtaUpdateRequestBodyAwsJobAbortConfig
 * The criteria that determine when and how a job abort takes place.
**/
public class CreateOtaUpdateRequestBodyAwsJobAbortConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abortCriteriaList")
    public openapisdk.models.shared.AwsJobAbortCriteria[] abortCriteriaList;
    public CreateOtaUpdateRequestBodyAwsJobAbortConfig withAbortCriteriaList(openapisdk.models.shared.AwsJobAbortCriteria[] abortCriteriaList) {
        this.abortCriteriaList = abortCriteriaList;
        return this;
    }
}
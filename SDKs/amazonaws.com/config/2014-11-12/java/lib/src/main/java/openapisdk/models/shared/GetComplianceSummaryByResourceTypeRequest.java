package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetComplianceSummaryByResourceTypeRequest
 * <p/>
**/
public class GetComplianceSummaryByResourceTypeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceTypes")
    public String[] resourceTypes;
    public GetComplianceSummaryByResourceTypeRequest withResourceTypes(String[] resourceTypes) {
        this.resourceTypes = resourceTypes;
        return this;
    }
}
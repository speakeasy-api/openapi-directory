package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetApplicationDateRangeKpiResponse {
    @JsonProperty("ApplicationDateRangeKpiResponse")
    public ApplicationDateRangeKpiResponse applicationDateRangeKpiResponse;
    public GetApplicationDateRangeKpiResponse withApplicationDateRangeKpiResponse(ApplicationDateRangeKpiResponse applicationDateRangeKpiResponse) {
        this.applicationDateRangeKpiResponse = applicationDateRangeKpiResponse;
        return this;
    }
}
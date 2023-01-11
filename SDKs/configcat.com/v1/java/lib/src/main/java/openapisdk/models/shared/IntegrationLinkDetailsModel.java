package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IntegrationLinkDetailsModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allIntegrationLinkCount")
    public Integer allIntegrationLinkCount;
    public IntegrationLinkDetailsModel withAllIntegrationLinkCount(Integer allIntegrationLinkCount) {
        this.allIntegrationLinkCount = allIntegrationLinkCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public IntegrationLinkDetail[] details;
    public IntegrationLinkDetailsModel withDetails(IntegrationLinkDetail[] details) {
        this.details = details;
        return this;
    }
}
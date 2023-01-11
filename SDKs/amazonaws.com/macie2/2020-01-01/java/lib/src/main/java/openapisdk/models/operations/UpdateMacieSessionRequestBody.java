package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMacieSessionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingPublishingFrequency")
    public UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum findingPublishingFrequency;
    public UpdateMacieSessionRequestBody withFindingPublishingFrequency(UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum findingPublishingFrequency) {
        this.findingPublishingFrequency = findingPublishingFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public UpdateMacieSessionRequestBodyStatusEnum status;
    public UpdateMacieSessionRequestBody withStatus(UpdateMacieSessionRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
}
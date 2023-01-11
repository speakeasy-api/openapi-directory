package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnableMacieRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public EnableMacieRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingPublishingFrequency")
    public EnableMacieRequestBodyFindingPublishingFrequencyEnum findingPublishingFrequency;
    public EnableMacieRequestBody withFindingPublishingFrequency(EnableMacieRequestBodyFindingPublishingFrequencyEnum findingPublishingFrequency) {
        this.findingPublishingFrequency = findingPublishingFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public EnableMacieRequestBodyStatusEnum status;
    public EnableMacieRequestBody withStatus(EnableMacieRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ActionTypeArtifactDetails
 * Information about parameters for artifacts associated with the action type, such as the minimum and maximum artifacts allowed.
**/
public class ActionTypeArtifactDetails {
    @JsonProperty("maximumCount")
    public Long maximumCount;
    public ActionTypeArtifactDetails withMaximumCount(Long maximumCount) {
        this.maximumCount = maximumCount;
        return this;
    }
    @JsonProperty("minimumCount")
    public Long minimumCount;
    public ActionTypeArtifactDetails withMinimumCount(Long minimumCount) {
        this.minimumCount = minimumCount;
        return this;
    }
}
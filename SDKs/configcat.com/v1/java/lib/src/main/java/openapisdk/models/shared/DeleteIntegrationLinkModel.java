package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteIntegrationLinkModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasRemainingIntegrationLink")
    public Boolean hasRemainingIntegrationLink;
    public DeleteIntegrationLinkModel withHasRemainingIntegrationLink(Boolean hasRemainingIntegrationLink) {
        this.hasRemainingIntegrationLink = hasRemainingIntegrationLink;
        return this;
    }
}
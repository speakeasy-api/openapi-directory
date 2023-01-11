package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NotificationSummary
 * A notification summary return object.
**/
public class NotificationSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensUpgradeSummary")
    public LensUpgradeSummary lensUpgradeSummary;
    public NotificationSummary withLensUpgradeSummary(LensUpgradeSummary lensUpgradeSummary) {
        this.lensUpgradeSummary = lensUpgradeSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public NotificationTypeEnum type;
    public NotificationSummary withType(NotificationTypeEnum type) {
        this.type = type;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProjectBadge
 * Information about the build badge for the build project.
**/
public class ProjectBadge {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("badgeEnabled")
    public Boolean badgeEnabled;
    public ProjectBadge withBadgeEnabled(Boolean badgeEnabled) {
        this.badgeEnabled = badgeEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("badgeRequestUrl")
    public String badgeRequestUrl;
    public ProjectBadge withBadgeRequestUrl(String badgeRequestUrl) {
        this.badgeRequestUrl = badgeRequestUrl;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReferralDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_name")
    public String siteName;
    public ReferralDestination withSiteName(String siteName) {
        this.siteName = siteName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ReferralDestination withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
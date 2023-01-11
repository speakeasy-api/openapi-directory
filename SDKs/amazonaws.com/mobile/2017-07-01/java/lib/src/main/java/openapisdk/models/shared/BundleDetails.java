package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BundleDetails
 *  The details of the bundle. 
**/
public class BundleDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availablePlatforms")
    public PlatformEnum[] availablePlatforms;
    public BundleDetails withAvailablePlatforms(PlatformEnum[] availablePlatforms) {
        this.availablePlatforms = availablePlatforms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundleId")
    public String bundleId;
    public BundleDetails withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BundleDetails withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iconUrl")
    public String iconUrl;
    public BundleDetails withIconUrl(String iconUrl) {
        this.iconUrl = iconUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public BundleDetails withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public BundleDetails withVersion(String version) {
        this.version = version;
        return this;
    }
}
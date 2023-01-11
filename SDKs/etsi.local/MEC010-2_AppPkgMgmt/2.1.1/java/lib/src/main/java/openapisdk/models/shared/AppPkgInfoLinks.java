package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AppPkgInfoLinks
 * Links to resources related to this resource.
**/
public class AppPkgInfoLinks {
    @JsonProperty("appD")
    public LinkType appD;
    public AppPkgInfoLinks withAppD(LinkType appD) {
        this.appD = appD;
        return this;
    }
    @JsonProperty("appPkgContent")
    public LinkType appPkgContent;
    public AppPkgInfoLinks withAppPkgContent(LinkType appPkgContent) {
        this.appPkgContent = appPkgContent;
        return this;
    }
    @JsonProperty("self")
    public LinkType self;
    public AppPkgInfoLinks withSelf(LinkType self) {
        this.self = self;
        return this;
    }
}
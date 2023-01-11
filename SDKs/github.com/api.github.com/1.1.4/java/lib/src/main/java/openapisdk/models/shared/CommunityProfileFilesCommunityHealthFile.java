package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CommunityProfileFilesCommunityHealthFile {
    @JsonProperty("html_url")
    public String htmlUrl;
    public CommunityProfileFilesCommunityHealthFile withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public CommunityProfileFilesCommunityHealthFile withUrl(String url) {
        this.url = url;
        return this;
    }
}
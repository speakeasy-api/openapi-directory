package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommunityProfileFilesCodeOfConductSimple
 * Code of Conduct Simple
**/
public class CommunityProfileFilesCodeOfConductSimple {
    @JsonProperty("html_url")
    public String htmlUrl;
    public CommunityProfileFilesCodeOfConductSimple withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public CommunityProfileFilesCodeOfConductSimple withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CommunityProfileFilesCodeOfConductSimple withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public CommunityProfileFilesCodeOfConductSimple withUrl(String url) {
        this.url = url;
        return this;
    }
}
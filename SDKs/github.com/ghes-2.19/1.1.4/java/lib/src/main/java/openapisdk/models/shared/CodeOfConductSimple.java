package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CodeOfConductSimple
 * Code of Conduct Simple
**/
public class CodeOfConductSimple {
    @JsonProperty("html_url")
    public String htmlUrl;
    public CodeOfConductSimple withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public CodeOfConductSimple withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CodeOfConductSimple withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public CodeOfConductSimple withUrl(String url) {
        this.url = url;
        return this;
    }
}
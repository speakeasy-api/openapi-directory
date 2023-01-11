package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CodeOfConduct
 * Code Of Conduct
**/
public class CodeOfConduct {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public CodeOfConduct withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public CodeOfConduct withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public CodeOfConduct withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CodeOfConduct withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public CodeOfConduct withUrl(String url) {
        this.url = url;
        return this;
    }
}
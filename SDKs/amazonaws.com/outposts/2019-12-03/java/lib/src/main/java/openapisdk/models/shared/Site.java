package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Site
 * Information about a site.
**/
public class Site {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public Site withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Site withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Site withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SiteArn")
    public String siteArn;
    public Site withSiteArn(String siteArn) {
        this.siteArn = siteArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SiteId")
    public String siteId;
    public Site withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public Site withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}
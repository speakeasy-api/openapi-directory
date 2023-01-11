package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Url
 *  A uniform resource locator, used as a unique identifier to locate a resource on the internet. 
**/
public class Url {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hyperlinkName")
    public String hyperlinkName;
    public Url withHyperlinkName(String hyperlinkName) {
        this.hyperlinkName = hyperlinkName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public Url withLink(String link) {
        this.link = link;
        return this;
    }
}
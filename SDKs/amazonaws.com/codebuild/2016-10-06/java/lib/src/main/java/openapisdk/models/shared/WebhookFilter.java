package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebhookFilter
 *  A filter used to determine which webhooks trigger a build. 
**/
public class WebhookFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeMatchedPattern")
    public Boolean excludeMatchedPattern;
    public WebhookFilter withExcludeMatchedPattern(Boolean excludeMatchedPattern) {
        this.excludeMatchedPattern = excludeMatchedPattern;
        return this;
    }
    @JsonProperty("pattern")
    public String pattern;
    public WebhookFilter withPattern(String pattern) {
        this.pattern = pattern;
        return this;
    }
    @JsonProperty("type")
    public WebhookFilterTypeEnum type;
    public WebhookFilter withType(WebhookFilterTypeEnum type) {
        this.type = type;
        return this;
    }
}
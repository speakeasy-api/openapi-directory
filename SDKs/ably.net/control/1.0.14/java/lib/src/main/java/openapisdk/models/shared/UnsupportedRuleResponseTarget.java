package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UnsupportedRuleResponseTarget {
    @JsonProperty("url")
    public String url;
    public UnsupportedRuleResponseTarget withUrl(String url) {
        this.url = url;
        return this;
    }
}
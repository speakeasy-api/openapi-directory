package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Article {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public Article withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pubdate")
    public String pubdate;
    public Article withPubdate(String pubdate) {
        this.pubdate = pubdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Article withTitle(String title) {
        this.title = title;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Collection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doi")
    public String doi;
    public Collection withDoi(String doi) {
        this.doi = doi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handle")
    public String handle;
    public Collection withHandle(String handle) {
        this.handle = handle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Collection withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published_date")
    public String publishedDate;
    public Collection withPublishedDate(String publishedDate) {
        this.publishedDate = publishedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeline")
    public Timeline timeline;
    public Collection withTimeline(Timeline timeline) {
        this.timeline = timeline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Collection withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Collection withUrl(String url) {
        this.url = url;
        return this;
    }
}
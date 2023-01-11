package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ThreadSubject {
    @JsonProperty("latest_comment_url")
    public String latestCommentUrl;
    public ThreadSubject withLatestCommentUrl(String latestCommentUrl) {
        this.latestCommentUrl = latestCommentUrl;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ThreadSubject withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ThreadSubject withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ThreadSubject withUrl(String url) {
        this.url = url;
        return this;
    }
}
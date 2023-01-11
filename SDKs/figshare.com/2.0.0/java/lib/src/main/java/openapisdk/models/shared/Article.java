package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Article {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defined_type")
    public Long definedType;
    public Article withDefinedType(Long definedType) {
        this.definedType = definedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defined_type_name")
    public String definedTypeName;
    public Article withDefinedTypeName(String definedTypeName) {
        this.definedTypeName = definedTypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doi")
    public String doi;
    public Article withDoi(String doi) {
        this.doi = doi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_id")
    public Double groupId;
    public Article withGroupId(Double groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handle")
    public String handle;
    public Article withHandle(String handle) {
        this.handle = handle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Article withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published_date")
    public String publishedDate;
    public Article withPublishedDate(String publishedDate) {
        this.publishedDate = publishedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumb")
    public String thumb;
    public Article withThumb(String thumb) {
        this.thumb = thumb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeline")
    public Timeline timeline;
    public Article withTimeline(Timeline timeline) {
        this.timeline = timeline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Article withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Article withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url_private_api")
    public String urlPrivateApi;
    public Article withUrlPrivateApi(String urlPrivateApi) {
        this.urlPrivateApi = urlPrivateApi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url_private_html")
    public String urlPrivateHtml;
    public Article withUrlPrivateHtml(String urlPrivateHtml) {
        this.urlPrivateHtml = urlPrivateHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url_public_api")
    public String urlPublicApi;
    public Article withUrlPublicApi(String urlPublicApi) {
        this.urlPublicApi = urlPublicApi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url_public_html")
    public String urlPublicHtml;
    public Article withUrlPublicHtml(String urlPublicHtml) {
        this.urlPublicHtml = urlPublicHtml;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectPrivate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ProjectPrivate withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published_date")
    public String publishedDate;
    public ProjectPrivate withPublishedDate(String publishedDate) {
        this.publishedDate = publishedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public ProjectPrivateRoleEnum role;
    public ProjectPrivate withRole(ProjectPrivateRoleEnum role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storage")
    public ProjectPrivateStorageEnum storage;
    public ProjectPrivate withStorage(ProjectPrivateStorageEnum storage) {
        this.storage = storage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ProjectPrivate withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ProjectPrivate withUrl(String url) {
        this.url = url;
        return this;
    }
}
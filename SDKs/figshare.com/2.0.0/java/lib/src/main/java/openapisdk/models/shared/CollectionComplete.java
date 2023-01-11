package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CollectionComplete {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("articles_count")
    public Long articlesCount;
    public CollectionComplete withArticlesCount(Long articlesCount) {
        this.articlesCount = articlesCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authors")
    public Author[] authors;
    public CollectionComplete withAuthors(Author[] authors) {
        this.authors = authors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public Category[] categories;
    public CollectionComplete withCategories(Category[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("citation")
    public String citation;
    public CollectionComplete withCitation(String citation) {
        this.citation = citation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_date")
    public String createdDate;
    public CollectionComplete withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public CustomArticleField[] customFields;
    public CollectionComplete withCustomFields(CustomArticleField[] customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CollectionComplete withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doi")
    public String doi;
    public CollectionComplete withDoi(String doi) {
        this.doi = doi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("funding")
    public FundingInformation[] funding;
    public CollectionComplete withFunding(FundingInformation[] funding) {
        this.funding = funding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_id")
    public Long groupId;
    public CollectionComplete withGroupId(Long groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_resource_id")
    public String groupResourceId;
    public CollectionComplete withGroupResourceId(String groupResourceId) {
        this.groupResourceId = groupResourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handle")
    public String handle;
    public CollectionComplete withHandle(String handle) {
        this.handle = handle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public CollectionComplete withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("institution_id")
    public Long institutionId;
    public CollectionComplete withInstitutionId(Long institutionId) {
        this.institutionId = institutionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified_date")
    public String modifiedDate;
    public CollectionComplete withModifiedDate(String modifiedDate) {
        this.modifiedDate = modifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public")
    public Boolean public_;
    public CollectionComplete withPublic(Boolean public_) {
        this.public_ = public_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published_date")
    public String publishedDate;
    public CollectionComplete withPublishedDate(String publishedDate) {
        this.publishedDate = publishedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("references")
    public String[] references;
    public CollectionComplete withReferences(String[] references) {
        this.references = references;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_doi")
    public String resourceDoi;
    public CollectionComplete withResourceDoi(String resourceDoi) {
        this.resourceDoi = resourceDoi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_id")
    public String resourceId;
    public CollectionComplete withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_link")
    public String resourceLink;
    public CollectionComplete withResourceLink(String resourceLink) {
        this.resourceLink = resourceLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_title")
    public String resourceTitle;
    public CollectionComplete withResourceTitle(String resourceTitle) {
        this.resourceTitle = resourceTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_version")
    public Long resourceVersion;
    public CollectionComplete withResourceVersion(Long resourceVersion) {
        this.resourceVersion = resourceVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public CollectionComplete withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeline")
    public Timeline timeline;
    public CollectionComplete withTimeline(Timeline timeline) {
        this.timeline = timeline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public CollectionComplete withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public CollectionComplete withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Long version;
    public CollectionComplete withVersion(Long version) {
        this.version = version;
        return this;
    }
}
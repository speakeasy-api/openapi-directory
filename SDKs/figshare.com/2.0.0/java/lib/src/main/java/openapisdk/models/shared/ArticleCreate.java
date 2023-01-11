package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ArticleCreate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authors")
    public java.util.Map<String, Object>[] authors;
    public ArticleCreate withAuthors(java.util.Map<String, Object>[] authors) {
        this.authors = authors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public Long[] categories;
    public ArticleCreate withCategories(Long[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public ArticleCreate withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defined_type")
    public String definedType;
    public ArticleCreate withDefinedType(String definedType) {
        this.definedType = definedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ArticleCreate withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doi")
    public String doi;
    public ArticleCreate withDoi(String doi) {
        this.doi = doi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("funding")
    public String funding;
    public ArticleCreate withFunding(String funding) {
        this.funding = funding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("funding_list")
    public FundingCreate[] fundingList;
    public ArticleCreate withFundingList(FundingCreate[] fundingList) {
        this.fundingList = fundingList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_id")
    public Long groupId;
    public ArticleCreate withGroupId(Long groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handle")
    public String handle;
    public ArticleCreate withHandle(String handle) {
        this.handle = handle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywords")
    public String[] keywords;
    public ArticleCreate withKeywords(String[] keywords) {
        this.keywords = keywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public Long license;
    public ArticleCreate withLicense(Long license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("references")
    public String[] references;
    public ArticleCreate withReferences(String[] references) {
        this.references = references;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_doi")
    public String resourceDoi;
    public ArticleCreate withResourceDoi(String resourceDoi) {
        this.resourceDoi = resourceDoi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_title")
    public String resourceTitle;
    public ArticleCreate withResourceTitle(String resourceTitle) {
        this.resourceTitle = resourceTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public ArticleCreate withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeline")
    public TimelineUpdate timeline;
    public ArticleCreate withTimeline(TimelineUpdate timeline) {
        this.timeline = timeline;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ArticleCreate withTitle(String title) {
        this.title = title;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ArticleUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authors")
    public java.util.Map<String, Object>[] authors;
    public ArticleUpdate withAuthors(java.util.Map<String, Object>[] authors) {
        this.authors = authors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public Long[] categories;
    public ArticleUpdate withCategories(Long[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public ArticleUpdate withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defined_type")
    public String definedType;
    public ArticleUpdate withDefinedType(String definedType) {
        this.definedType = definedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ArticleUpdate withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doi")
    public String doi;
    public ArticleUpdate withDoi(String doi) {
        this.doi = doi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("funding")
    public String funding;
    public ArticleUpdate withFunding(String funding) {
        this.funding = funding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("funding_list")
    public FundingCreate[] fundingList;
    public ArticleUpdate withFundingList(FundingCreate[] fundingList) {
        this.fundingList = fundingList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_id")
    public Long groupId;
    public ArticleUpdate withGroupId(Long groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handle")
    public String handle;
    public ArticleUpdate withHandle(String handle) {
        this.handle = handle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywords")
    public String[] keywords;
    public ArticleUpdate withKeywords(String[] keywords) {
        this.keywords = keywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public Long license;
    public ArticleUpdate withLicense(Long license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("references")
    public String[] references;
    public ArticleUpdate withReferences(String[] references) {
        this.references = references;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_doi")
    public String resourceDoi;
    public ArticleUpdate withResourceDoi(String resourceDoi) {
        this.resourceDoi = resourceDoi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_title")
    public String resourceTitle;
    public ArticleUpdate withResourceTitle(String resourceTitle) {
        this.resourceTitle = resourceTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public ArticleUpdate withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeline")
    public TimelineUpdate timeline;
    public ArticleUpdate withTimeline(TimelineUpdate timeline) {
        this.timeline = timeline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ArticleUpdate withTitle(String title) {
        this.title = title;
        return this;
    }
}
package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ArticleCompletePrivate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authors")
    public Author[] authors;
    public ArticleCompletePrivate withAuthors(Author[] authors) {
        this.authors = authors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public Category[] categories;
    public ArticleCompletePrivate withCategories(Category[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("citation")
    public String citation;
    public ArticleCompletePrivate withCitation(String citation) {
        this.citation = citation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidential_reason")
    public String confidentialReason;
    public ArticleCompletePrivate withConfidentialReason(String confidentialReason) {
        this.confidentialReason = confidentialReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_date")
    public String createdDate;
    public ArticleCompletePrivate withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public CustomArticleField[] customFields;
    public ArticleCompletePrivate withCustomFields(CustomArticleField[] customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defined_type")
    public Long definedType;
    public ArticleCompletePrivate withDefinedType(Long definedType) {
        this.definedType = definedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defined_type_name")
    public String definedTypeName;
    public ArticleCompletePrivate withDefinedTypeName(String definedTypeName) {
        this.definedTypeName = definedTypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ArticleCompletePrivate withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doi")
    public String doi;
    public ArticleCompletePrivate withDoi(String doi) {
        this.doi = doi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embargo_date")
    public String embargoDate;
    public ArticleCompletePrivate withEmbargoDate(String embargoDate) {
        this.embargoDate = embargoDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embargo_options")
    public GroupEmbargoOptions[] embargoOptions;
    public ArticleCompletePrivate withEmbargoOptions(GroupEmbargoOptions[] embargoOptions) {
        this.embargoOptions = embargoOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embargo_reason")
    public String embargoReason;
    public ArticleCompletePrivate withEmbargoReason(String embargoReason) {
        this.embargoReason = embargoReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embargo_title")
    public String embargoTitle;
    public ArticleCompletePrivate withEmbargoTitle(String embargoTitle) {
        this.embargoTitle = embargoTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embargo_type")
    public String embargoType;
    public ArticleCompletePrivate withEmbargoType(String embargoType) {
        this.embargoType = embargoType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("figshare_url")
    public String figshareUrl;
    public ArticleCompletePrivate withFigshareUrl(String figshareUrl) {
        this.figshareUrl = figshareUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public PublicFile[] files;
    public ArticleCompletePrivate withFiles(PublicFile[] files) {
        this.files = files;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("funding")
    public String funding;
    public ArticleCompletePrivate withFunding(String funding) {
        this.funding = funding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("funding_list")
    public Long[] fundingList;
    public ArticleCompletePrivate withFundingList(Long[] fundingList) {
        this.fundingList = fundingList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_id")
    public Double groupId;
    public ArticleCompletePrivate withGroupId(Double groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_resource_id")
    public String groupResourceId;
    public ArticleCompletePrivate withGroupResourceId(String groupResourceId) {
        this.groupResourceId = groupResourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handle")
    public String handle;
    public ArticleCompletePrivate withHandle(String handle) {
        this.handle = handle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_linked_file")
    public Boolean hasLinkedFile;
    public ArticleCompletePrivate withHasLinkedFile(Boolean hasLinkedFile) {
        this.hasLinkedFile = hasLinkedFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ArticleCompletePrivate withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_active")
    public Boolean isActive;
    public ArticleCompletePrivate withIsActive(Boolean isActive) {
        this.isActive = isActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_confidential")
    public Boolean isConfidential;
    public ArticleCompletePrivate withIsConfidential(Boolean isConfidential) {
        this.isConfidential = isConfidential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_embargoed")
    public Boolean isEmbargoed;
    public ArticleCompletePrivate withIsEmbargoed(Boolean isEmbargoed) {
        this.isEmbargoed = isEmbargoed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_metadata_record")
    public Boolean isMetadataRecord;
    public ArticleCompletePrivate withIsMetadataRecord(Boolean isMetadataRecord) {
        this.isMetadataRecord = isMetadataRecord;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_public")
    public Boolean isPublic;
    public ArticleCompletePrivate withIsPublic(Boolean isPublic) {
        this.isPublic = isPublic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public License license;
    public ArticleCompletePrivate withLicense(License license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata_reason")
    public String metadataReason;
    public ArticleCompletePrivate withMetadataReason(String metadataReason) {
        this.metadataReason = metadataReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified_date")
    public String modifiedDate;
    public ArticleCompletePrivate withModifiedDate(String modifiedDate) {
        this.modifiedDate = modifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published_date")
    public String publishedDate;
    public ArticleCompletePrivate withPublishedDate(String publishedDate) {
        this.publishedDate = publishedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("references")
    public String[] references;
    public ArticleCompletePrivate withReferences(String[] references) {
        this.references = references;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_doi")
    public String resourceDoi;
    public ArticleCompletePrivate withResourceDoi(String resourceDoi) {
        this.resourceDoi = resourceDoi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_title")
    public String resourceTitle;
    public ArticleCompletePrivate withResourceTitle(String resourceTitle) {
        this.resourceTitle = resourceTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public ArticleCompletePrivate withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public ArticleCompletePrivate withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public ArticleCompletePrivate withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumb")
    public String thumb;
    public ArticleCompletePrivate withThumb(String thumb) {
        this.thumb = thumb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeline")
    public Timeline timeline;
    public ArticleCompletePrivate withTimeline(Timeline timeline) {
        this.timeline = timeline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ArticleCompletePrivate withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ArticleCompletePrivate withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url_private_api")
    public String urlPrivateApi;
    public ArticleCompletePrivate withUrlPrivateApi(String urlPrivateApi) {
        this.urlPrivateApi = urlPrivateApi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url_private_html")
    public String urlPrivateHtml;
    public ArticleCompletePrivate withUrlPrivateHtml(String urlPrivateHtml) {
        this.urlPrivateHtml = urlPrivateHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url_public_api")
    public String urlPublicApi;
    public ArticleCompletePrivate withUrlPublicApi(String urlPublicApi) {
        this.urlPublicApi = urlPublicApi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url_public_html")
    public String urlPublicHtml;
    public ArticleCompletePrivate withUrlPublicHtml(String urlPublicHtml) {
        this.urlPublicHtml = urlPublicHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Long version;
    public ArticleCompletePrivate withVersion(Long version) {
        this.version = version;
        return this;
    }
}
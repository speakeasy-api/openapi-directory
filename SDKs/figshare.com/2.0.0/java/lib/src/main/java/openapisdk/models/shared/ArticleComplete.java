package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ArticleComplete {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authors")
    public Author[] authors;
    public ArticleComplete withAuthors(Author[] authors) {
        this.authors = authors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public Category[] categories;
    public ArticleComplete withCategories(Category[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("citation")
    public String citation;
    public ArticleComplete withCitation(String citation) {
        this.citation = citation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidential_reason")
    public String confidentialReason;
    public ArticleComplete withConfidentialReason(String confidentialReason) {
        this.confidentialReason = confidentialReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_date")
    public String createdDate;
    public ArticleComplete withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public CustomArticleField[] customFields;
    public ArticleComplete withCustomFields(CustomArticleField[] customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defined_type")
    public Long definedType;
    public ArticleComplete withDefinedType(Long definedType) {
        this.definedType = definedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defined_type_name")
    public String definedTypeName;
    public ArticleComplete withDefinedTypeName(String definedTypeName) {
        this.definedTypeName = definedTypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ArticleComplete withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doi")
    public String doi;
    public ArticleComplete withDoi(String doi) {
        this.doi = doi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embargo_date")
    public String embargoDate;
    public ArticleComplete withEmbargoDate(String embargoDate) {
        this.embargoDate = embargoDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embargo_options")
    public GroupEmbargoOptions[] embargoOptions;
    public ArticleComplete withEmbargoOptions(GroupEmbargoOptions[] embargoOptions) {
        this.embargoOptions = embargoOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embargo_reason")
    public String embargoReason;
    public ArticleComplete withEmbargoReason(String embargoReason) {
        this.embargoReason = embargoReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embargo_title")
    public String embargoTitle;
    public ArticleComplete withEmbargoTitle(String embargoTitle) {
        this.embargoTitle = embargoTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embargo_type")
    public String embargoType;
    public ArticleComplete withEmbargoType(String embargoType) {
        this.embargoType = embargoType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("figshare_url")
    public String figshareUrl;
    public ArticleComplete withFigshareUrl(String figshareUrl) {
        this.figshareUrl = figshareUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public PublicFile[] files;
    public ArticleComplete withFiles(PublicFile[] files) {
        this.files = files;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("funding")
    public String funding;
    public ArticleComplete withFunding(String funding) {
        this.funding = funding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("funding_list")
    public Long[] fundingList;
    public ArticleComplete withFundingList(Long[] fundingList) {
        this.fundingList = fundingList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_id")
    public Double groupId;
    public ArticleComplete withGroupId(Double groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handle")
    public String handle;
    public ArticleComplete withHandle(String handle) {
        this.handle = handle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_linked_file")
    public Boolean hasLinkedFile;
    public ArticleComplete withHasLinkedFile(Boolean hasLinkedFile) {
        this.hasLinkedFile = hasLinkedFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ArticleComplete withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_active")
    public Boolean isActive;
    public ArticleComplete withIsActive(Boolean isActive) {
        this.isActive = isActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_confidential")
    public Boolean isConfidential;
    public ArticleComplete withIsConfidential(Boolean isConfidential) {
        this.isConfidential = isConfidential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_embargoed")
    public Boolean isEmbargoed;
    public ArticleComplete withIsEmbargoed(Boolean isEmbargoed) {
        this.isEmbargoed = isEmbargoed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_metadata_record")
    public Boolean isMetadataRecord;
    public ArticleComplete withIsMetadataRecord(Boolean isMetadataRecord) {
        this.isMetadataRecord = isMetadataRecord;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_public")
    public Boolean isPublic;
    public ArticleComplete withIsPublic(Boolean isPublic) {
        this.isPublic = isPublic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public License license;
    public ArticleComplete withLicense(License license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata_reason")
    public String metadataReason;
    public ArticleComplete withMetadataReason(String metadataReason) {
        this.metadataReason = metadataReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified_date")
    public String modifiedDate;
    public ArticleComplete withModifiedDate(String modifiedDate) {
        this.modifiedDate = modifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published_date")
    public String publishedDate;
    public ArticleComplete withPublishedDate(String publishedDate) {
        this.publishedDate = publishedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("references")
    public String[] references;
    public ArticleComplete withReferences(String[] references) {
        this.references = references;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_doi")
    public String resourceDoi;
    public ArticleComplete withResourceDoi(String resourceDoi) {
        this.resourceDoi = resourceDoi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_title")
    public String resourceTitle;
    public ArticleComplete withResourceTitle(String resourceTitle) {
        this.resourceTitle = resourceTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public ArticleComplete withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public ArticleComplete withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public ArticleComplete withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumb")
    public String thumb;
    public ArticleComplete withThumb(String thumb) {
        this.thumb = thumb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeline")
    public Timeline timeline;
    public ArticleComplete withTimeline(Timeline timeline) {
        this.timeline = timeline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ArticleComplete withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ArticleComplete withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url_private_api")
    public String urlPrivateApi;
    public ArticleComplete withUrlPrivateApi(String urlPrivateApi) {
        this.urlPrivateApi = urlPrivateApi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url_private_html")
    public String urlPrivateHtml;
    public ArticleComplete withUrlPrivateHtml(String urlPrivateHtml) {
        this.urlPrivateHtml = urlPrivateHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url_public_api")
    public String urlPublicApi;
    public ArticleComplete withUrlPublicApi(String urlPublicApi) {
        this.urlPublicApi = urlPublicApi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url_public_html")
    public String urlPublicHtml;
    public ArticleComplete withUrlPublicHtml(String urlPublicHtml) {
        this.urlPublicHtml = urlPublicHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Long version;
    public ArticleComplete withVersion(Long version) {
        this.version = version;
        return this;
    }
}
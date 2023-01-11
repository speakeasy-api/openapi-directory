package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectArticle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public Category[] categories;
    public ProjectArticle withCategories(Category[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("citation")
    public String citation;
    public ProjectArticle withCitation(String citation) {
        this.citation = citation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidential_reason")
    public String confidentialReason;
    public ProjectArticle withConfidentialReason(String confidentialReason) {
        this.confidentialReason = confidentialReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_date")
    public String createdDate;
    public ProjectArticle withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defined_type")
    public Long definedType;
    public ProjectArticle withDefinedType(Long definedType) {
        this.definedType = definedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defined_type_name")
    public String definedTypeName;
    public ProjectArticle withDefinedTypeName(String definedTypeName) {
        this.definedTypeName = definedTypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ProjectArticle withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doi")
    public String doi;
    public ProjectArticle withDoi(String doi) {
        this.doi = doi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embargo_date")
    public String embargoDate;
    public ProjectArticle withEmbargoDate(String embargoDate) {
        this.embargoDate = embargoDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embargo_reason")
    public String embargoReason;
    public ProjectArticle withEmbargoReason(String embargoReason) {
        this.embargoReason = embargoReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embargo_title")
    public String embargoTitle;
    public ProjectArticle withEmbargoTitle(String embargoTitle) {
        this.embargoTitle = embargoTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embargo_type")
    public String embargoType;
    public ProjectArticle withEmbargoType(String embargoType) {
        this.embargoType = embargoType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("funding")
    public String funding;
    public ProjectArticle withFunding(String funding) {
        this.funding = funding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("funding_list")
    public Long[] fundingList;
    public ProjectArticle withFundingList(Long[] fundingList) {
        this.fundingList = fundingList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_id")
    public Double groupId;
    public ProjectArticle withGroupId(Double groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handle")
    public String handle;
    public ProjectArticle withHandle(String handle) {
        this.handle = handle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_linked_file")
    public Boolean hasLinkedFile;
    public ProjectArticle withHasLinkedFile(Boolean hasLinkedFile) {
        this.hasLinkedFile = hasLinkedFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ProjectArticle withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_active")
    public Boolean isActive;
    public ProjectArticle withIsActive(Boolean isActive) {
        this.isActive = isActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_confidential")
    public Boolean isConfidential;
    public ProjectArticle withIsConfidential(Boolean isConfidential) {
        this.isConfidential = isConfidential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_embargoed")
    public Boolean isEmbargoed;
    public ProjectArticle withIsEmbargoed(Boolean isEmbargoed) {
        this.isEmbargoed = isEmbargoed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_metadata_record")
    public Boolean isMetadataRecord;
    public ProjectArticle withIsMetadataRecord(Boolean isMetadataRecord) {
        this.isMetadataRecord = isMetadataRecord;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_public")
    public Boolean isPublic;
    public ProjectArticle withIsPublic(Boolean isPublic) {
        this.isPublic = isPublic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public License license;
    public ProjectArticle withLicense(License license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata_reason")
    public String metadataReason;
    public ProjectArticle withMetadataReason(String metadataReason) {
        this.metadataReason = metadataReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified_date")
    public String modifiedDate;
    public ProjectArticle withModifiedDate(String modifiedDate) {
        this.modifiedDate = modifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published_date")
    public String publishedDate;
    public ProjectArticle withPublishedDate(String publishedDate) {
        this.publishedDate = publishedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("references")
    public String[] references;
    public ProjectArticle withReferences(String[] references) {
        this.references = references;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public ProjectArticle withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public ProjectArticle withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public ProjectArticle withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumb")
    public String thumb;
    public ProjectArticle withThumb(String thumb) {
        this.thumb = thumb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeline")
    public Timeline timeline;
    public ProjectArticle withTimeline(Timeline timeline) {
        this.timeline = timeline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ProjectArticle withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ProjectArticle withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url_private_api")
    public String urlPrivateApi;
    public ProjectArticle withUrlPrivateApi(String urlPrivateApi) {
        this.urlPrivateApi = urlPrivateApi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url_private_html")
    public String urlPrivateHtml;
    public ProjectArticle withUrlPrivateHtml(String urlPrivateHtml) {
        this.urlPrivateHtml = urlPrivateHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url_public_api")
    public String urlPublicApi;
    public ProjectArticle withUrlPublicApi(String urlPublicApi) {
        this.urlPublicApi = urlPublicApi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url_public_html")
    public String urlPublicHtml;
    public ProjectArticle withUrlPublicHtml(String urlPublicHtml) {
        this.urlPublicHtml = urlPublicHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Long version;
    public ProjectArticle withVersion(Long version) {
        this.version = version;
        return this;
    }
}
package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Record
 * *NOTE:* There are a lot of fields that are very rarely used in DigitalNZ. For instance there are custom built fields that are only relevant, and only found on specific collections. The schema below focuses on the most common / well populated fields and does not show every possible field available for a single record. 
 * 
**/
public class Record {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public RecordCategoryEnum[] category;
    public Record withCategory(RecordCategoryEnum[] category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public String[] collection;
    public Record withCollection(String[] collection) {
        this.collection = collection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection_title")
    public String[] collectionTitle;
    public Record withCollectionTitle(String[] collectionTitle) {
        this.collectionTitle = collectionTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_partner")
    public String[] contentPartner;
    public Record withContentPartner(String[] contentPartner) {
        this.contentPartner = contentPartner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyright")
    public RecordCopyrightEnum[] copyright;
    public Record withCopyright(RecordCopyrightEnum[] copyright) {
        this.copyright = copyright;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Record withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public String[] creator;
    public Record withCreator(String[] creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String[] date;
    public Record withDate(String[] date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dc_identifier")
    public String[] dcIdentifier;
    public Record withDcIdentifier(String[] dcIdentifier) {
        this.dcIdentifier = dcIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Record withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_collection")
    public String displayCollection;
    public Record withDisplayCollection(String displayCollection) {
        this.displayCollection = displayCollection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_content_partner")
    public String displayContentPartner;
    public Record withDisplayContentPartner(String displayContentPartner) {
        this.displayContentPartner = displayContentPartner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_date")
    public String displayDate;
    public Record withDisplayDate(String displayDate) {
        this.displayDate = displayDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Record withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("landing_url")
    public String landingUrl;
    public Record withLandingUrl(String landingUrl) {
        this.landingUrl = landingUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("large_thumbnail_url")
    public String largeThumbnailUrl;
    public Record withLargeThumbnailUrl(String largeThumbnailUrl) {
        this.largeThumbnailUrl = largeThumbnailUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locations")
    public RecordLocations[] locations;
    public Record withLocations(RecordLocations[] locations) {
        this.locations = locations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_collection")
    public String[] primaryCollection;
    public Record withPrimaryCollection(String[] primaryCollection) {
        this.primaryCollection = primaryCollection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rights")
    public String rights;
    public Record withRights(String rights) {
        this.rights = rights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rights_url")
    public String[] rightsUrl;
    public Record withRightsUrl(String[] rightsUrl) {
        this.rightsUrl = rightsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_url")
    public String sourceUrl;
    public Record withSourceUrl(String sourceUrl) {
        this.sourceUrl = sourceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public String[] subject;
    public Record withSubject(String[] subject) {
        this.subject = subject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail_url")
    public String thumbnailUrl;
    public Record withThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Record withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public Record withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage")
    public RecordUsageEnum[] usage;
    public Record withUsage(RecordUsageEnum[] usage) {
        this.usage = usage;
        return this;
    }
}
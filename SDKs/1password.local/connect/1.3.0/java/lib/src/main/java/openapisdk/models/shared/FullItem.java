package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class FullItem {
    @JsonProperty("category")
    public FullItemCategoryEnum category;
    public FullItem withCategory(FullItemCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public FullItem withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("favorite")
    public Boolean favorite;
    public FullItem withFavorite(Boolean favorite) {
        this.favorite = favorite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public Field[] fields;
    public FullItem withFields(Field[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public File[] files;
    public FullItem withFiles(File[] files) {
        this.files = files;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FullItem withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastEditedBy")
    public String lastEditedBy;
    public FullItem withLastEditedBy(String lastEditedBy) {
        this.lastEditedBy = lastEditedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sections")
    public FullItemSections[] sections;
    public FullItem withSections(FullItemSections[] sections) {
        this.sections = sections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public FullItemStateEnum state;
    public FullItem withState(FullItemStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public FullItem withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public FullItem withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public FullItem withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urls")
    public FullItemUrls[] urls;
    public FullItem withUrls(FullItemUrls[] urls) {
        this.urls = urls;
        return this;
    }
    @JsonProperty("vault")
    public FullItemVault vault;
    public FullItem withVault(FullItemVault vault) {
        this.vault = vault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Long version;
    public FullItem withVersion(Long version) {
        this.version = version;
        return this;
    }
}
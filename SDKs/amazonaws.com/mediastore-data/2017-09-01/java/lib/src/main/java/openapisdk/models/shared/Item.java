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
 * Item
 * A metadata entry for a folder or object.
**/
public class Item {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentLength")
    public Long contentLength;
    public Item withContentLength(Long contentLength) {
        this.contentLength = contentLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentType")
    public String contentType;
    public Item withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ETag")
    public String eTag;
    public Item withETag(String eTag) {
        this.eTag = eTag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModified")
    public OffsetDateTime lastModified;
    public Item withLastModified(OffsetDateTime lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Item withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public ItemTypeEnum type;
    public Item withType(ItemTypeEnum type) {
        this.type = type;
        return this;
    }
}
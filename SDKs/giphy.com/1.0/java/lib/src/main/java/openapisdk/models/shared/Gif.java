package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Gif {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bitly_url")
    public String bitlyUrl;
    public Gif withBitlyUrl(String bitlyUrl) {
        this.bitlyUrl = bitlyUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_url")
    public String contentUrl;
    public Gif withContentUrl(String contentUrl) {
        this.contentUrl = contentUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("create_datetime")
    public OffsetDateTime createDatetime;
    public Gif withCreateDatetime(OffsetDateTime createDatetime) {
        this.createDatetime = createDatetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embded_url")
    public String embdedUrl;
    public Gif withEmbdedUrl(String embdedUrl) {
        this.embdedUrl = embdedUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("featured_tags")
    public String[] featuredTags;
    public Gif withFeaturedTags(String[] featuredTags) {
        this.featuredTags = featuredTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Gif withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public GifImages images;
    public Gif withImages(GifImages images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("import_datetime")
    public OffsetDateTime importDatetime;
    public Gif withImportDatetime(OffsetDateTime importDatetime) {
        this.importDatetime = importDatetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rating")
    public String rating;
    public Gif withRating(String rating) {
        this.rating = rating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slug")
    public String slug;
    public Gif withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public Gif withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_post_url")
    public String sourcePostUrl;
    public Gif withSourcePostUrl(String sourcePostUrl) {
        this.sourcePostUrl = sourcePostUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_tld")
    public String sourceTld;
    public Gif withSourceTld(String sourceTld) {
        this.sourceTld = sourceTld;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public Gif withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("trending_datetime")
    public OffsetDateTime trendingDatetime;
    public Gif withTrendingDatetime(OffsetDateTime trendingDatetime) {
        this.trendingDatetime = trendingDatetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GifTypeEnum type;
    public Gif withType(GifTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("update_datetime")
    public OffsetDateTime updateDatetime;
    public Gif withUpdateDatetime(OffsetDateTime updateDatetime) {
        this.updateDatetime = updateDatetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Gif withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public User user;
    public Gif withUser(User user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public Gif withUsername(String username) {
        this.username = username;
        return this;
    }
}
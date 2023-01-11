package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ChannelCatalogExportCacheInfo {
    @JsonProperty("cacheStatus")
    public String cacheStatus;
    public ChannelCatalogExportCacheInfo withCacheStatus(String cacheStatus) {
        this.cacheStatus = cacheStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expirationUtcDate")
    public OffsetDateTime expirationUtcDate;
    public ChannelCatalogExportCacheInfo withExpirationUtcDate(OffsetDateTime expirationUtcDate) {
        this.expirationUtcDate = expirationUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedUrl")
    public String feedUrl;
    public ChannelCatalogExportCacheInfo withFeedUrl(String feedUrl) {
        this.feedUrl = feedUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastContentChangeUtcDate")
    public OffsetDateTime lastContentChangeUtcDate;
    public ChannelCatalogExportCacheInfo withLastContentChangeUtcDate(OffsetDateTime lastContentChangeUtcDate) {
        this.lastContentChangeUtcDate = lastContentChangeUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdateUtcDate")
    public OffsetDateTime lastUpdateUtcDate;
    public ChannelCatalogExportCacheInfo withLastUpdateUtcDate(OffsetDateTime lastUpdateUtcDate) {
        this.lastUpdateUtcDate = lastUpdateUtcDate;
        return this;
    }
}
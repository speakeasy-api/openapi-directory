package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Channel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssetChangeType")
    public String assetChangeType;
    public Channel withAssetChangeType(String assetChangeType) {
        this.assetChangeType = assetChangeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssetFamily")
    public AssetFamilyEnum assetFamily;
    public Channel withAssetFamily(AssetFamilyEnum assetFamily) {
        this.assetFamily = assetFamily;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssetType")
    public AssetTypeEnum assetType;
    public Channel withAssetType(AssetTypeEnum assetType) {
        this.assetType = assetType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChannelId")
    public Integer channelId;
    public Channel withChannelId(Integer channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreateDateUtc")
    public OffsetDateTime createDateUtc;
    public Channel withCreateDateUtc(OffsetDateTime createDateUtc) {
        this.createDateUtc = createDateUtc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Metadata")
    public String metadata;
    public Channel withMetadata(String metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotificationCount")
    public Integer notificationCount;
    public Channel withNotificationCount(Integer notificationCount) {
        this.notificationCount = notificationCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("OldestChangeNotificationDateUtc")
    public OffsetDateTime oldestChangeNotificationDateUtc;
    public Channel withOldestChangeNotificationDateUtc(OffsetDateTime oldestChangeNotificationDateUtc) {
        this.oldestChangeNotificationDateUtc = oldestChangeNotificationDateUtc;
        return this;
    }
}
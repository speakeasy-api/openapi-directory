package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ChangedAssetDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("asset_changed_utc_datetime")
    public OffsetDateTime assetChangedUtcDatetime;
    public ChangedAssetDetail withAssetChangedUtcDatetime(OffsetDateTime assetChangedUtcDatetime) {
        this.assetChangedUtcDatetime = assetChangedUtcDatetime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset_lifecycle")
    public String assetLifecycle;
    public ChangedAssetDetail withAssetLifecycle(String assetLifecycle) {
        this.assetLifecycle = assetLifecycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset_type")
    public String assetType;
    public ChangedAssetDetail withAssetType(String assetType) {
        this.assetType = assetType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ChangedAssetDetail withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ChangedAssetDetail withUri(String uri) {
        this.uri = uri;
        return this;
    }
}
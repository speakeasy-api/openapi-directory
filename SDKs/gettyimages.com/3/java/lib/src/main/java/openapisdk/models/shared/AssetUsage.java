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
 * AssetUsage
 * Specifies the id, usage Quantity, and date of when an asset was used.
**/
public class AssetUsage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset_id")
    public String assetId;
    public AssetUsage withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Integer quantity;
    public AssetUsage withQuantity(Integer quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("usage_date")
    public OffsetDateTime usageDate;
    public AssetUsage withUsageDate(OffsetDateTime usageDate) {
        this.usageDate = usageDate;
        return this;
    }
}
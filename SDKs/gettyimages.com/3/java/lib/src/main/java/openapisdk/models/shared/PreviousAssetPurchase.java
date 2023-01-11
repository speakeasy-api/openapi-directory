package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PreviousAssetPurchase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset_id")
    public String assetId;
    public PreviousAssetPurchase withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset_type")
    public String assetType;
    public PreviousAssetPurchase withAssetType(String assetType) {
        this.assetType = assetType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_purchased")
    public OffsetDateTime datePurchased;
    public PreviousAssetPurchase withDatePurchased(OffsetDateTime datePurchased) {
        this.datePurchased = datePurchased;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_uri")
    public String downloadUri;
    public PreviousAssetPurchase withDownloadUri(String downloadUri) {
        this.downloadUri = downloadUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_size_in_bytes")
    public String fileSizeInBytes;
    public PreviousAssetPurchase withFileSizeInBytes(String fileSizeInBytes) {
        this.fileSizeInBytes = fileSizeInBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license_model")
    public String licenseModel;
    public PreviousAssetPurchase withLicenseModel(String licenseModel) {
        this.licenseModel = licenseModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_id")
    public String orderId;
    public PreviousAssetPurchase withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchased_by")
    public String purchasedBy;
    public PreviousAssetPurchase withPurchasedBy(String purchasedBy) {
        this.purchasedBy = purchasedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size_name")
    public String sizeName;
    public PreviousAssetPurchase withSizeName(String sizeName) {
        this.sizeName = sizeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumb_uri")
    public String thumbUri;
    public PreviousAssetPurchase withThumbUri(String thumbUri) {
        this.thumbUri = thumbUri;
        return this;
    }
}
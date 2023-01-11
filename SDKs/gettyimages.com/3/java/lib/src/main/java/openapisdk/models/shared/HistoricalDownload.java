package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class HistoricalDownload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agreement_name")
    public String agreementName;
    public HistoricalDownload withAgreementName(String agreementName) {
        this.agreementName = agreementName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset_type")
    public String assetType;
    public HistoricalDownload withAssetType(String assetType) {
        this.assetType = assetType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_downloaded")
    public OffsetDateTime dateDownloaded;
    public HistoricalDownload withDateDownloaded(OffsetDateTime dateDownloaded) {
        this.dateDownloaded = dateDownloaded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimensions dimensions;
    public HistoricalDownload withDimensions(Dimensions dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_details")
    public DownloadDetails downloadDetails;
    public HistoricalDownload withDownloadDetails(DownloadDetails downloadDetails) {
        this.downloadDetails = downloadDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_source")
    public String downloadSource;
    public HistoricalDownload withDownloadSource(String downloadSource) {
        this.downloadSource = downloadSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public HistoricalDownload withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product_id")
    public Integer productId;
    public HistoricalDownload withProductId(Integer productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product_type")
    public String productType;
    public HistoricalDownload withProductType(String productType) {
        this.productType = productType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size_name")
    public String sizeName;
    public HistoricalDownload withSizeName(String sizeName) {
        this.sizeName = sizeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumb_uri")
    public String thumbUri;
    public HistoricalDownload withThumbUri(String thumbUri) {
        this.thumbUri = thumbUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public User user;
    public HistoricalDownload withUser(User user) {
        this.user = user;
        return this;
    }
}
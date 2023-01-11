package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ImageSearchItemCreative {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_use")
    public AllowedUse allowedUse;
    public ImageSearchItemCreative withAllowedUse(AllowedUse allowedUse) {
        this.allowedUse = allowedUse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_ids")
    public java.util.Map<String, String> alternativeIds;
    public ImageSearchItemCreative withAlternativeIds(java.util.Map<String, String> alternativeIds) {
        this.alternativeIds = alternativeIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artist")
    public String artist;
    public ImageSearchItemCreative withArtist(String artist) {
        this.artist = artist;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset_family")
    public String assetFamily;
    public ImageSearchItemCreative withAssetFamily(String assetFamily) {
        this.assetFamily = assetFamily;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_for_image")
    public Boolean callForImage;
    public ImageSearchItemCreative withCallForImage(Boolean callForImage) {
        this.callForImage = callForImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caption")
    public String caption;
    public ImageSearchItemCreative withCaption(String caption) {
        this.caption = caption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection_code")
    public String collectionCode;
    public ImageSearchItemCreative withCollectionCode(String collectionCode) {
        this.collectionCode = collectionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection_id")
    public Integer collectionId;
    public ImageSearchItemCreative withCollectionId(Integer collectionId) {
        this.collectionId = collectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection_name")
    public String collectionName;
    public ImageSearchItemCreative withCollectionName(String collectionName) {
        this.collectionName = collectionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color_type")
    public String colorType;
    public ImageSearchItemCreative withColorType(String colorType) {
        this.colorType = colorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyright")
    public String copyright;
    public ImageSearchItemCreative withCopyright(String copyright) {
        this.copyright = copyright;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_camera_shot")
    public OffsetDateTime dateCameraShot;
    public ImageSearchItemCreative withDateCameraShot(OffsetDateTime dateCameraShot) {
        this.dateCameraShot = dateCameraShot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public ImageSearchItemCreative withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_sizes")
    public ImageSearchItemDisplaySize[] displaySizes;
    public ImageSearchItemCreative withDisplaySizes(ImageSearchItemDisplaySize[] displaySizes) {
        this.displaySizes = displaySizes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_product")
    public String downloadProduct;
    public ImageSearchItemCreative withDownloadProduct(String downloadProduct) {
        this.downloadProduct = downloadProduct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("graphical_style")
    public String graphicalStyle;
    public ImageSearchItemCreative withGraphicalStyle(String graphicalStyle) {
        this.graphicalStyle = graphicalStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ImageSearchItemCreative withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywords")
    public Keyword[] keywords;
    public ImageSearchItemCreative withKeywords(Keyword[] keywords) {
        this.keywords = keywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("largest_downloads")
    public Download[] largestDownloads;
    public ImageSearchItemCreative withLargestDownloads(Download[] largestDownloads) {
        this.largestDownloads = largestDownloads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license_model")
    public String licenseModel;
    public ImageSearchItemCreative withLicenseModel(String licenseModel) {
        this.licenseModel = licenseModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_dimensions")
    public MaxDimensions maxDimensions;
    public ImageSearchItemCreative withMaxDimensions(MaxDimensions maxDimensions) {
        this.maxDimensions = maxDimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orientation")
    public String orientation;
    public ImageSearchItemCreative withOrientation(String orientation) {
        this.orientation = orientation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quality_rank")
    public Integer qualityRank;
    public ImageSearchItemCreative withQualityRank(Integer qualityRank) {
        this.qualityRank = qualityRank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referral_destinations")
    public ReferralDestination[] referralDestinations;
    public ImageSearchItemCreative withReferralDestinations(ReferralDestination[] referralDestinations) {
        this.referralDestinations = referralDestinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ImageSearchItemCreative withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri_oembed")
    public String uriOembed;
    public ImageSearchItemCreative withUriOembed(String uriOembed) {
        this.uriOembed = uriOembed;
        return this;
    }
}
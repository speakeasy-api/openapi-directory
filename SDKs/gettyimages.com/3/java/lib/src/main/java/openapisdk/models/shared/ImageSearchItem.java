package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ImageSearchItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_use")
    public AllowedUse allowedUse;
    public ImageSearchItem withAllowedUse(AllowedUse allowedUse) {
        this.allowedUse = allowedUse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_ids")
    public java.util.Map<String, String> alternativeIds;
    public ImageSearchItem withAlternativeIds(java.util.Map<String, String> alternativeIds) {
        this.alternativeIds = alternativeIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artist")
    public String artist;
    public ImageSearchItem withArtist(String artist) {
        this.artist = artist;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset_family")
    public String assetFamily;
    public ImageSearchItem withAssetFamily(String assetFamily) {
        this.assetFamily = assetFamily;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_for_image")
    public Boolean callForImage;
    public ImageSearchItem withCallForImage(Boolean callForImage) {
        this.callForImage = callForImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caption")
    public String caption;
    public ImageSearchItem withCaption(String caption) {
        this.caption = caption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection_code")
    public String collectionCode;
    public ImageSearchItem withCollectionCode(String collectionCode) {
        this.collectionCode = collectionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection_id")
    public Integer collectionId;
    public ImageSearchItem withCollectionId(Integer collectionId) {
        this.collectionId = collectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection_name")
    public String collectionName;
    public ImageSearchItem withCollectionName(String collectionName) {
        this.collectionName = collectionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color_type")
    public String colorType;
    public ImageSearchItem withColorType(String colorType) {
        this.colorType = colorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyright")
    public String copyright;
    public ImageSearchItem withCopyright(String copyright) {
        this.copyright = copyright;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_camera_shot")
    public OffsetDateTime dateCameraShot;
    public ImageSearchItem withDateCameraShot(OffsetDateTime dateCameraShot) {
        this.dateCameraShot = dateCameraShot;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public ImageSearchItem withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_sizes")
    public ImageSearchItemDisplaySize[] displaySizes;
    public ImageSearchItem withDisplaySizes(ImageSearchItemDisplaySize[] displaySizes) {
        this.displaySizes = displaySizes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_product")
    public String downloadProduct;
    public ImageSearchItem withDownloadProduct(String downloadProduct) {
        this.downloadProduct = downloadProduct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("editorial_segments")
    public String[] editorialSegments;
    public ImageSearchItem withEditorialSegments(String[] editorialSegments) {
        this.editorialSegments = editorialSegments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_ids")
    public Integer[] eventIds;
    public ImageSearchItem withEventIds(Integer[] eventIds) {
        this.eventIds = eventIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("graphical_style")
    public String graphicalStyle;
    public ImageSearchItem withGraphicalStyle(String graphicalStyle) {
        this.graphicalStyle = graphicalStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ImageSearchItem withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("istock_licenses")
    public IStockLicense[] istockLicenses;
    public ImageSearchItem withIstockLicenses(IStockLicense[] istockLicenses) {
        this.istockLicenses = istockLicenses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywords")
    public Keyword[] keywords;
    public ImageSearchItem withKeywords(Keyword[] keywords) {
        this.keywords = keywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("largest_downloads")
    public Download[] largestDownloads;
    public ImageSearchItem withLargestDownloads(Download[] largestDownloads) {
        this.largestDownloads = largestDownloads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license_model")
    public String licenseModel;
    public ImageSearchItem withLicenseModel(String licenseModel) {
        this.licenseModel = licenseModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_dimensions")
    public MaxDimensions maxDimensions;
    public ImageSearchItem withMaxDimensions(MaxDimensions maxDimensions) {
        this.maxDimensions = maxDimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orientation")
    public String orientation;
    public ImageSearchItem withOrientation(String orientation) {
        this.orientation = orientation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("people")
    public String[] people;
    public ImageSearchItem withPeople(String[] people) {
        this.people = people;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product_types")
    public String[] productTypes;
    public ImageSearchItem withProductTypes(String[] productTypes) {
        this.productTypes = productTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quality_rank")
    public Integer qualityRank;
    public ImageSearchItem withQualityRank(Integer qualityRank) {
        this.qualityRank = qualityRank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referral_destinations")
    public ReferralDestination[] referralDestinations;
    public ImageSearchItem withReferralDestinations(ReferralDestination[] referralDestinations) {
        this.referralDestinations = referralDestinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ImageSearchItem withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri_oembed")
    public String uriOembed;
    public ImageSearchItem withUriOembed(String uriOembed) {
        this.uriOembed = uriOembed;
        return this;
    }
}
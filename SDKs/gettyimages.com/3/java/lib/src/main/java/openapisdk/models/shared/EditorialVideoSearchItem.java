package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class EditorialVideoSearchItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_use")
    public AllowedUse allowedUse;
    public EditorialVideoSearchItem withAllowedUse(AllowedUse allowedUse) {
        this.allowedUse = allowedUse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artist")
    public String artist;
    public EditorialVideoSearchItem withArtist(String artist) {
        this.artist = artist;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset_family")
    public String assetFamily;
    public EditorialVideoSearchItem withAssetFamily(String assetFamily) {
        this.assetFamily = assetFamily;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caption")
    public String caption;
    public EditorialVideoSearchItem withCaption(String caption) {
        this.caption = caption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clip_length")
    public String clipLength;
    public EditorialVideoSearchItem withClipLength(String clipLength) {
        this.clipLength = clipLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection_code")
    public String collectionCode;
    public EditorialVideoSearchItem withCollectionCode(String collectionCode) {
        this.collectionCode = collectionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection_id")
    public Integer collectionId;
    public EditorialVideoSearchItem withCollectionId(Integer collectionId) {
        this.collectionId = collectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection_name")
    public String collectionName;
    public EditorialVideoSearchItem withCollectionName(String collectionName) {
        this.collectionName = collectionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color_type")
    public String colorType;
    public EditorialVideoSearchItem withColorType(String colorType) {
        this.colorType = colorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyright")
    public String copyright;
    public EditorialVideoSearchItem withCopyright(String copyright) {
        this.copyright = copyright;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public EditorialVideoSearchItem withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_sizes")
    public VideoSearchItemDisplaySize[] displaySizes;
    public EditorialVideoSearchItem withDisplaySizes(VideoSearchItemDisplaySize[] displaySizes) {
        this.displaySizes = displaySizes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_product")
    public String downloadProduct;
    public EditorialVideoSearchItem withDownloadProduct(String downloadProduct) {
        this.downloadProduct = downloadProduct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("era")
    public String era;
    public EditorialVideoSearchItem withEra(String era) {
        this.era = era;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_ids")
    public Integer[] eventIds;
    public EditorialVideoSearchItem withEventIds(Integer[] eventIds) {
        this.eventIds = eventIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public EditorialVideoSearchItem withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("istock_licenses")
    public IStockLicense[] istockLicenses;
    public EditorialVideoSearchItem withIstockLicenses(IStockLicense[] istockLicenses) {
        this.istockLicenses = istockLicenses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywords")
    public Keyword[] keywords;
    public EditorialVideoSearchItem withKeywords(Keyword[] keywords) {
        this.keywords = keywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("largest_downloads")
    public Download[] largestDownloads;
    public EditorialVideoSearchItem withLargestDownloads(Download[] largestDownloads) {
        this.largestDownloads = largestDownloads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license_model")
    public String licenseModel;
    public EditorialVideoSearchItem withLicenseModel(String licenseModel) {
        this.licenseModel = licenseModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mastered_to")
    public String masteredTo;
    public EditorialVideoSearchItem withMasteredTo(String masteredTo) {
        this.masteredTo = masteredTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originally_shot_on")
    public String originallyShotOn;
    public EditorialVideoSearchItem withOriginallyShotOn(String originallyShotOn) {
        this.originallyShotOn = originallyShotOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product_types")
    public String[] productTypes;
    public EditorialVideoSearchItem withProductTypes(String[] productTypes) {
        this.productTypes = productTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referral_destinations")
    public ReferralDestination[] referralDestinations;
    public EditorialVideoSearchItem withReferralDestinations(ReferralDestination[] referralDestinations) {
        this.referralDestinations = referralDestinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shot_speed")
    public String shotSpeed;
    public EditorialVideoSearchItem withShotSpeed(String shotSpeed) {
        this.shotSpeed = shotSpeed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public EditorialVideoSearchItem withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public EditorialVideoSearchItem withTitle(String title) {
        this.title = title;
        return this;
    }
}
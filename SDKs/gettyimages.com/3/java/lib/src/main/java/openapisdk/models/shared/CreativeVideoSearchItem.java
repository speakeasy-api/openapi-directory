package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreativeVideoSearchItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_use")
    public AllowedUse allowedUse;
    public CreativeVideoSearchItem withAllowedUse(AllowedUse allowedUse) {
        this.allowedUse = allowedUse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artist")
    public String artist;
    public CreativeVideoSearchItem withArtist(String artist) {
        this.artist = artist;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset_family")
    public String assetFamily;
    public CreativeVideoSearchItem withAssetFamily(String assetFamily) {
        this.assetFamily = assetFamily;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caption")
    public String caption;
    public CreativeVideoSearchItem withCaption(String caption) {
        this.caption = caption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clip_length")
    public String clipLength;
    public CreativeVideoSearchItem withClipLength(String clipLength) {
        this.clipLength = clipLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection_code")
    public String collectionCode;
    public CreativeVideoSearchItem withCollectionCode(String collectionCode) {
        this.collectionCode = collectionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection_id")
    public Integer collectionId;
    public CreativeVideoSearchItem withCollectionId(Integer collectionId) {
        this.collectionId = collectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection_name")
    public String collectionName;
    public CreativeVideoSearchItem withCollectionName(String collectionName) {
        this.collectionName = collectionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color_type")
    public String colorType;
    public CreativeVideoSearchItem withColorType(String colorType) {
        this.colorType = colorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyright")
    public String copyright;
    public CreativeVideoSearchItem withCopyright(String copyright) {
        this.copyright = copyright;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public CreativeVideoSearchItem withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_sizes")
    public VideoSearchItemDisplaySize[] displaySizes;
    public CreativeVideoSearchItem withDisplaySizes(VideoSearchItemDisplaySize[] displaySizes) {
        this.displaySizes = displaySizes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_product")
    public String downloadProduct;
    public CreativeVideoSearchItem withDownloadProduct(String downloadProduct) {
        this.downloadProduct = downloadProduct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("era")
    public String era;
    public CreativeVideoSearchItem withEra(String era) {
        this.era = era;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_ids")
    public Integer[] eventIds;
    public CreativeVideoSearchItem withEventIds(Integer[] eventIds) {
        this.eventIds = eventIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CreativeVideoSearchItem withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("istock_licenses")
    public IStockLicense[] istockLicenses;
    public CreativeVideoSearchItem withIstockLicenses(IStockLicense[] istockLicenses) {
        this.istockLicenses = istockLicenses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywords")
    public Keyword[] keywords;
    public CreativeVideoSearchItem withKeywords(Keyword[] keywords) {
        this.keywords = keywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("largest_downloads")
    public Download[] largestDownloads;
    public CreativeVideoSearchItem withLargestDownloads(Download[] largestDownloads) {
        this.largestDownloads = largestDownloads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license_model")
    public String licenseModel;
    public CreativeVideoSearchItem withLicenseModel(String licenseModel) {
        this.licenseModel = licenseModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mastered_to")
    public String masteredTo;
    public CreativeVideoSearchItem withMasteredTo(String masteredTo) {
        this.masteredTo = masteredTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originally_shot_on")
    public String originallyShotOn;
    public CreativeVideoSearchItem withOriginallyShotOn(String originallyShotOn) {
        this.originallyShotOn = originallyShotOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product_types")
    public String[] productTypes;
    public CreativeVideoSearchItem withProductTypes(String[] productTypes) {
        this.productTypes = productTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("referral_destinations")
    public ReferralDestination[] referralDestinations;
    public CreativeVideoSearchItem withReferralDestinations(ReferralDestination[] referralDestinations) {
        this.referralDestinations = referralDestinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shot_speed")
    public String shotSpeed;
    public CreativeVideoSearchItem withShotSpeed(String shotSpeed) {
        this.shotSpeed = shotSpeed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public CreativeVideoSearchItem withTitle(String title) {
        this.title = title;
        return this;
    }
}
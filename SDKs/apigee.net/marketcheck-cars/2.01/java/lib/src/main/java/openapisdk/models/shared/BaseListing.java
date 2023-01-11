package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BaseListing
 * Minimal set of attributes describing a listing
**/
public class BaseListing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build")
    public Build build;
    public BaseListing withBuild(Build build) {
        this.build = build;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carfax_1_owner")
    public Boolean carfax1Owner;
    public BaseListing withCarfax1Owner(Boolean carfax1Owner) {
        this.carfax1Owner = carfax1Owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carfax_clean_title")
    public Boolean carfaxCleanTitle;
    public BaseListing withCarfaxCleanTitle(Boolean carfaxCleanTitle) {
        this.carfaxCleanTitle = carfaxCleanTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_source")
    public String dataSource;
    public BaseListing withDataSource(String dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealer")
    public NestDealer dealer;
    public BaseListing withDealer(NestDealer dealer) {
        this.dealer = dealer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dist")
    public Double dist;
    public BaseListing withDist(Double dist) {
        this.dist = dist;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dom")
    public Long dom;
    public BaseListing withDom(Long dom) {
        this.dom = dom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dom_180")
    public Long dom180;
    public BaseListing withDom180(Long dom180) {
        this.dom180 = dom180;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dom_active")
    public Long domActive;
    public BaseListing withDomActive(Long domActive) {
        this.domActive = domActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exterior_color")
    public String exteriorColor;
    public BaseListing withExteriorColor(String exteriorColor) {
        this.exteriorColor = exteriorColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("financing_options")
    public ListingFinance[] financingOptions;
    public BaseListing withFinancingOptions(ListingFinance[] financingOptions) {
        this.financingOptions = financingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_seen_at")
    public Long firstSeenAt;
    public BaseListing withFirstSeenAt(Long firstSeenAt) {
        this.firstSeenAt = firstSeenAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_seen_at_date")
    public String firstSeenAtDate;
    public BaseListing withFirstSeenAtDate(String firstSeenAtDate) {
        this.firstSeenAtDate = firstSeenAtDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heading")
    public String heading;
    public BaseListing withHeading(String heading) {
        this.heading = heading;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public BaseListing withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interior_color")
    public String interiorColor;
    public BaseListing withInteriorColor(String interiorColor) {
        this.interiorColor = interiorColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventory_type")
    public String inventoryType;
    public BaseListing withInventoryType(String inventoryType) {
        this.inventoryType = inventoryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_certified")
    public Long isCertified;
    public BaseListing withIsCertified(Long isCertified) {
        this.isCertified = isCertified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_seen_at")
    public Long lastSeenAt;
    public BaseListing withLastSeenAt(Long lastSeenAt) {
        this.lastSeenAt = lastSeenAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_seen_at_date")
    public String lastSeenAtDate;
    public BaseListing withLastSeenAtDate(String lastSeenAtDate) {
        this.lastSeenAtDate = lastSeenAtDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leasing_options")
    public ListingLease[] leasingOptions;
    public BaseListing withLeasingOptions(ListingLease[] leasingOptions) {
        this.leasingOptions = leasingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media")
    public ListingNestMedia media;
    public BaseListing withMedia(ListingNestMedia media) {
        this.media = media;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("miles")
    public Long miles;
    public BaseListing withMiles(Long miles) {
        this.miles = miles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model_code")
    public String modelCode;
    public BaseListing withModelCode(String modelCode) {
        this.modelCode = modelCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("msrp")
    public Long msrp;
    public BaseListing withMsrp(Long msrp) {
        this.msrp = msrp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Long price;
    public BaseListing withPrice(Long price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ref_miles")
    public String refMiles;
    public BaseListing withRefMiles(String refMiles) {
        this.refMiles = refMiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ref_miles_dt")
    public Long refMilesDt;
    public BaseListing withRefMilesDt(Long refMilesDt) {
        this.refMilesDt = refMilesDt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ref_price")
    public String refPrice;
    public BaseListing withRefPrice(String refPrice) {
        this.refPrice = refPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ref_price_dt")
    public Long refPriceDt;
    public BaseListing withRefPriceDt(Long refPriceDt) {
        this.refPriceDt = refPriceDt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scraped_at")
    public Double scrapedAt;
    public BaseListing withScrapedAt(Double scrapedAt) {
        this.scrapedAt = scrapedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scraped_at_date")
    public String scrapedAtDate;
    public BaseListing withScrapedAtDate(String scrapedAtDate) {
        this.scrapedAtDate = scrapedAtDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seller_type")
    public String sellerType;
    public BaseListing withSellerType(String sellerType) {
        this.sellerType = sellerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public BaseListing withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stock_no")
    public String stockNo;
    public BaseListing withStockNo(String stockNo) {
        this.stockNo = stockNo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vdp_url")
    public String vdpUrl;
    public BaseListing withVdpUrl(String vdpUrl) {
        this.vdpUrl = vdpUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vin")
    public String vin;
    public BaseListing withVin(String vin) {
        this.vin = vin;
        return this;
    }
}
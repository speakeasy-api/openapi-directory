package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Listing
 * Represents a full list of attributes available with Marketcheck for a car
**/
public class Listing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build")
    public Build build;
    public Listing withBuild(Build build) {
        this.build = build;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carfax_1_owner")
    public Boolean carfax1Owner;
    public Listing withCarfax1Owner(Boolean carfax1Owner) {
        this.carfax1Owner = carfax1Owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carfax_clean_title")
    public Boolean carfaxCleanTitle;
    public Listing withCarfaxCleanTitle(Boolean carfaxCleanTitle) {
        this.carfaxCleanTitle = carfaxCleanTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_source")
    public String dataSource;
    public Listing withDataSource(String dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealer")
    public NestDealer dealer;
    public Listing withDealer(NestDealer dealer) {
        this.dealer = dealer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dom")
    public Long dom;
    public Listing withDom(Long dom) {
        this.dom = dom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dom_180")
    public Long dom180;
    public Listing withDom180(Long dom180) {
        this.dom180 = dom180;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dom_active")
    public Long domActive;
    public Listing withDomActive(Long domActive) {
        this.domActive = domActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exterior_color")
    public String exteriorColor;
    public Listing withExteriorColor(String exteriorColor) {
        this.exteriorColor = exteriorColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extra")
    public ListingNestExtraAttributes extra;
    public Listing withExtra(ListingNestExtraAttributes extra) {
        this.extra = extra;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("financing_options")
    public ListingFinance[] financingOptions;
    public Listing withFinancingOptions(ListingFinance[] financingOptions) {
        this.financingOptions = financingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_seen_at")
    public Long firstSeenAt;
    public Listing withFirstSeenAt(Long firstSeenAt) {
        this.firstSeenAt = firstSeenAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_seen_at_date")
    public String firstSeenAtDate;
    public Listing withFirstSeenAtDate(String firstSeenAtDate) {
        this.firstSeenAtDate = firstSeenAtDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_seen_at_mc")
    public Long firstSeenAtMc;
    public Listing withFirstSeenAtMc(Long firstSeenAtMc) {
        this.firstSeenAtMc = firstSeenAtMc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_seen_at_mc_date")
    public String firstSeenAtMcDate;
    public Listing withFirstSeenAtMcDate(String firstSeenAtMcDate) {
        this.firstSeenAtMcDate = firstSeenAtMcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_seen_at_source")
    public Long firstSeenAtSource;
    public Listing withFirstSeenAtSource(Long firstSeenAtSource) {
        this.firstSeenAtSource = firstSeenAtSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_seen_at_source_date")
    public String firstSeenAtSourceDate;
    public Listing withFirstSeenAtSourceDate(String firstSeenAtSourceDate) {
        this.firstSeenAtSourceDate = firstSeenAtSourceDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heading")
    public String heading;
    public Listing withHeading(String heading) {
        this.heading = heading;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Listing withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interior_color")
    public String interiorColor;
    public Listing withInteriorColor(String interiorColor) {
        this.interiorColor = interiorColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventory_type")
    public String inventoryType;
    public Listing withInventoryType(String inventoryType) {
        this.inventoryType = inventoryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_certified")
    public Long isCertified;
    public Listing withIsCertified(Long isCertified) {
        this.isCertified = isCertified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_seen_at")
    public Long lastSeenAt;
    public Listing withLastSeenAt(Long lastSeenAt) {
        this.lastSeenAt = lastSeenAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_seen_at_date")
    public String lastSeenAtDate;
    public Listing withLastSeenAtDate(String lastSeenAtDate) {
        this.lastSeenAtDate = lastSeenAtDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leasing_options")
    public ListingLease[] leasingOptions;
    public Listing withLeasingOptions(ListingLease[] leasingOptions) {
        this.leasingOptions = leasingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media")
    public ListingNestMedia media;
    public Listing withMedia(ListingNestMedia media) {
        this.media = media;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("miles")
    public Long miles;
    public Listing withMiles(Long miles) {
        this.miles = miles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("msrp")
    public Long msrp;
    public Listing withMsrp(Long msrp) {
        this.msrp = msrp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Long price;
    public Listing withPrice(Long price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rank")
    public Long rank;
    public Listing withRank(Long rank) {
        this.rank = rank;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ref_miles")
    public String refMiles;
    public Listing withRefMiles(String refMiles) {
        this.refMiles = refMiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ref_miles_dt")
    public Long refMilesDt;
    public Listing withRefMilesDt(Long refMilesDt) {
        this.refMilesDt = refMilesDt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ref_price")
    public String refPrice;
    public Listing withRefPrice(String refPrice) {
        this.refPrice = refPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ref_price_dt")
    public Long refPriceDt;
    public Listing withRefPriceDt(Long refPriceDt) {
        this.refPriceDt = refPriceDt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Double score;
    public Listing withScore(Double score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scraped_at")
    public Long scrapedAt;
    public Listing withScrapedAt(Long scrapedAt) {
        this.scrapedAt = scrapedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scraped_at_date")
    public String scrapedAtDate;
    public Listing withScrapedAtDate(String scrapedAtDate) {
        this.scrapedAtDate = scrapedAtDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seller_type")
    public String sellerType;
    public Listing withSellerType(String sellerType) {
        this.sellerType = sellerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public Listing withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stock_no")
    public String stockNo;
    public Listing withStockNo(String stockNo) {
        this.stockNo = stockNo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vdp_url")
    public String vdpUrl;
    public Listing withVdpUrl(String vdpUrl) {
        this.vdpUrl = vdpUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vin")
    public String vin;
    public Listing withVin(String vin) {
        this.vin = vin;
        return this;
    }
}
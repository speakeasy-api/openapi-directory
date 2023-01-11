package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HistoricalListing
 * Represents a car history entry
**/
public class HistoricalListing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carfax_1_owner")
    public Boolean carfax1Owner;
    public HistoricalListing withCarfax1Owner(Boolean carfax1Owner) {
        this.carfax1Owner = carfax1Owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carfax_clean_title")
    public Boolean carfaxCleanTitle;
    public HistoricalListing withCarfaxCleanTitle(Boolean carfaxCleanTitle) {
        this.carfaxCleanTitle = carfaxCleanTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public HistoricalListing withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_source")
    public String dataSource;
    public HistoricalListing withDataSource(String dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealer_id")
    public Long dealerId;
    public HistoricalListing withDealerId(Long dealerId) {
        this.dealerId = dealerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dom")
    public Long dom;
    public HistoricalListing withDom(Long dom) {
        this.dom = dom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dom_180")
    public Long dom180;
    public HistoricalListing withDom180(Long dom180) {
        this.dom180 = dom180;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dom_active")
    public Long domActive;
    public HistoricalListing withDomActive(Long domActive) {
        this.domActive = domActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exterior_color")
    public String exteriorColor;
    public HistoricalListing withExteriorColor(String exteriorColor) {
        this.exteriorColor = exteriorColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("financing_options")
    public ListingFinance[] financingOptions;
    public HistoricalListing withFinancingOptions(ListingFinance[] financingOptions) {
        this.financingOptions = financingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_seen_at")
    public Long firstSeenAt;
    public HistoricalListing withFirstSeenAt(Long firstSeenAt) {
        this.firstSeenAt = firstSeenAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_seen_at_date")
    public String firstSeenAtDate;
    public HistoricalListing withFirstSeenAtDate(String firstSeenAtDate) {
        this.firstSeenAtDate = firstSeenAtDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heading")
    public String heading;
    public HistoricalListing withHeading(String heading) {
        this.heading = heading;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public HistoricalListing withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interior_color")
    public String interiorColor;
    public HistoricalListing withInteriorColor(String interiorColor) {
        this.interiorColor = interiorColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventory_type")
    public String inventoryType;
    public HistoricalListing withInventoryType(String inventoryType) {
        this.inventoryType = inventoryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_certified")
    public Long isCertified;
    public HistoricalListing withIsCertified(Long isCertified) {
        this.isCertified = isCertified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_searchable")
    public String isSearchable;
    public HistoricalListing withIsSearchable(String isSearchable) {
        this.isSearchable = isSearchable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_seen_at")
    public Long lastSeenAt;
    public HistoricalListing withLastSeenAt(Long lastSeenAt) {
        this.lastSeenAt = lastSeenAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_seen_at_date")
    public String lastSeenAtDate;
    public HistoricalListing withLastSeenAtDate(String lastSeenAtDate) {
        this.lastSeenAtDate = lastSeenAtDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public String latitude;
    public HistoricalListing withLatitude(String latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leasing_options")
    public ListingLease[] leasingOptions;
    public HistoricalListing withLeasingOptions(ListingLease[] leasingOptions) {
        this.leasingOptions = leasingOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public String longitude;
    public HistoricalListing withLongitude(String longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("miles")
    public Long miles;
    public HistoricalListing withMiles(Long miles) {
        this.miles = miles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("msrp")
    public Long msrp;
    public HistoricalListing withMsrp(Long msrp) {
        this.msrp = msrp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Long price;
    public HistoricalListing withPrice(Long price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ref_miles")
    public String refMiles;
    public HistoricalListing withRefMiles(String refMiles) {
        this.refMiles = refMiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ref_miles_dt")
    public Long refMilesDt;
    public HistoricalListing withRefMilesDt(Long refMilesDt) {
        this.refMilesDt = refMilesDt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ref_price")
    public String refPrice;
    public HistoricalListing withRefPrice(String refPrice) {
        this.refPrice = refPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ref_price_dt")
    public Long refPriceDt;
    public HistoricalListing withRefPriceDt(Long refPriceDt) {
        this.refPriceDt = refPriceDt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scraped_at")
    public Long scrapedAt;
    public HistoricalListing withScrapedAt(Long scrapedAt) {
        this.scrapedAt = scrapedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scraped_at_date")
    public String scrapedAtDate;
    public HistoricalListing withScrapedAtDate(String scrapedAtDate) {
        this.scrapedAtDate = scrapedAtDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seller_name")
    public String sellerName;
    public HistoricalListing withSellerName(String sellerName) {
        this.sellerName = sellerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seller_name_o")
    public String sellerNameO;
    public HistoricalListing withSellerNameO(String sellerNameO) {
        this.sellerNameO = sellerNameO;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seller_type")
    public String sellerType;
    public HistoricalListing withSellerType(String sellerType) {
        this.sellerType = sellerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public HistoricalListing withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public HistoricalListing withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_date")
    public Long statusDate;
    public HistoricalListing withStatusDate(Long statusDate) {
        this.statusDate = statusDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stock_no")
    public String stockNo;
    public HistoricalListing withStockNo(String stockNo) {
        this.stockNo = stockNo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street")
    public String street;
    public HistoricalListing withStreet(String street) {
        this.street = street;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trim_r")
    public String trimR;
    public HistoricalListing withTrimR(String trimR) {
        this.trimR = trimR;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vdp_url")
    public String vdpUrl;
    public HistoricalListing withVdpUrl(String vdpUrl) {
        this.vdpUrl = vdpUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vin")
    public String vin;
    public HistoricalListing withVin(String vin) {
        this.vin = vin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zip")
    public String zip;
    public HistoricalListing withZip(String zip) {
        this.zip = zip;
        return this;
    }
}
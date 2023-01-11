package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchAndRankCarQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public SearchAndRankCarQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=append_api_key")
    public Boolean appendApiKey;
    public SearchAndRankCarQueryParams withAppendApiKey(Boolean appendApiKey) {
        this.appendApiKey = appendApiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=base_exterior_color")
    public String baseExteriorColor;
    public SearchAndRankCarQueryParams withBaseExteriorColor(String baseExteriorColor) {
        this.baseExteriorColor = baseExteriorColor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=base_interior_color")
    public String baseInteriorColor;
    public SearchAndRankCarQueryParams withBaseInteriorColor(String baseInteriorColor) {
        this.baseInteriorColor = baseInteriorColor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=body_subtype")
    public String bodySubtype;
    public SearchAndRankCarQueryParams withBodySubtype(String bodySubtype) {
        this.bodySubtype = bodySubtype;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=body_type")
    public String bodyType;
    public SearchAndRankCarQueryParams withBodyType(String bodyType) {
        this.bodyType = bodyType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=car_type")
    public openapisdk.models.shared.CarCarTypeEnum carType;
    public SearchAndRankCarQueryParams withCarType(openapisdk.models.shared.CarCarTypeEnum carType) {
        this.carType = carType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=carfax_1_owner")
    public openapisdk.models.shared.Carfax1OwnerEnum carfax1Owner;
    public SearchAndRankCarQueryParams withCarfax1Owner(openapisdk.models.shared.Carfax1OwnerEnum carfax1Owner) {
        this.carfax1Owner = carfax1Owner;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=carfax_clean_title")
    public openapisdk.models.shared.CarfaxCleanTitleEnum carfaxCleanTitle;
    public SearchAndRankCarQueryParams withCarfaxCleanTitle(openapisdk.models.shared.CarfaxCleanTitleEnum carfaxCleanTitle) {
        this.carfaxCleanTitle = carfaxCleanTitle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city")
    public String city;
    public SearchAndRankCarQueryParams withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city_mpg_range")
    public String cityMpgRange;
    public SearchAndRankCarQueryParams withCityMpgRange(String cityMpgRange) {
        this.cityMpgRange = cityMpgRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public openapisdk.models.shared.CarCountryEnum country;
    public SearchAndRankCarQueryParams withCountry(openapisdk.models.shared.CarCountryEnum country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cylinders")
    public String cylinders;
    public SearchAndRankCarQueryParams withCylinders(String cylinders) {
        this.cylinders = cylinders;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dealer_type")
    public openapisdk.models.shared.DealerTypeEnum dealerType;
    public SearchAndRankCarQueryParams withDealerType(openapisdk.models.shared.DealerTypeEnum dealerType) {
        this.dealerType = dealerType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dedup")
    public Boolean dedup;
    public SearchAndRankCarQueryParams withDedup(Boolean dedup) {
        this.dedup = dedup;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dom_180_range")
    public String dom180Range;
    public SearchAndRankCarQueryParams withDom180Range(String dom180Range) {
        this.dom180Range = dom180Range;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dom_active_range")
    public String domActiveRange;
    public SearchAndRankCarQueryParams withDomActiveRange(String domActiveRange) {
        this.domActiveRange = domActiveRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dom_range")
    public String domRange;
    public SearchAndRankCarQueryParams withDomRange(String domRange) {
        this.domRange = domRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doors")
    public String doors;
    public SearchAndRankCarQueryParams withDoors(String doors) {
        this.doors = doors;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=drivetrain")
    public String drivetrain;
    public SearchAndRankCarQueryParams withDrivetrain(String drivetrain) {
        this.drivetrain = drivetrain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=engine")
    public String engine;
    public SearchAndRankCarQueryParams withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=engine_aspiration")
    public String engineAspiration;
    public SearchAndRankCarQueryParams withEngineAspiration(String engineAspiration) {
        this.engineAspiration = engineAspiration;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=engine_block")
    public String engineBlock;
    public SearchAndRankCarQueryParams withEngineBlock(String engineBlock) {
        this.engineBlock = engineBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=engine_size")
    public String engineSize;
    public SearchAndRankCarQueryParams withEngineSize(String engineSize) {
        this.engineSize = engineSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_certified")
    public Boolean excludeCertified;
    public SearchAndRankCarQueryParams withExcludeCertified(Boolean excludeCertified) {
        this.excludeCertified = excludeCertified;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exterior_color")
    public String exteriorColor;
    public SearchAndRankCarQueryParams withExteriorColor(String exteriorColor) {
        this.exteriorColor = exteriorColor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facet_sort")
    public openapisdk.models.shared.FacetSortEnum facetSort;
    public SearchAndRankCarQueryParams withFacetSort(openapisdk.models.shared.FacetSortEnum facetSort) {
        this.facetSort = facetSort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facets")
    public String facets;
    public SearchAndRankCarQueryParams withFacets(String facets) {
        this.facets = facets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=finance_down_payment")
    public String financeDownPayment;
    public SearchAndRankCarQueryParams withFinanceDownPayment(String financeDownPayment) {
        this.financeDownPayment = financeDownPayment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=finance_down_payment_per")
    public String financeDownPaymentPer;
    public SearchAndRankCarQueryParams withFinanceDownPaymentPer(String financeDownPaymentPer) {
        this.financeDownPaymentPer = financeDownPaymentPer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=finance_emp")
    public String financeEmp;
    public SearchAndRankCarQueryParams withFinanceEmp(String financeEmp) {
        this.financeEmp = financeEmp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=finance_loan_apr")
    public String financeLoanApr;
    public SearchAndRankCarQueryParams withFinanceLoanApr(String financeLoanApr) {
        this.financeLoanApr = financeLoanApr;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=finance_loan_term")
    public String financeLoanTerm;
    public SearchAndRankCarQueryParams withFinanceLoanTerm(String financeLoanTerm) {
        this.financeLoanTerm = financeLoanTerm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_seen_at_mc_days")
    public String firstSeenAtMcDays;
    public SearchAndRankCarQueryParams withFirstSeenAtMcDays(String firstSeenAtMcDays) {
        this.firstSeenAtMcDays = firstSeenAtMcDays;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_seen_at_mc_range")
    public String firstSeenAtMcRange;
    public SearchAndRankCarQueryParams withFirstSeenAtMcRange(String firstSeenAtMcRange) {
        this.firstSeenAtMcRange = firstSeenAtMcRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_seen_at_source_days")
    public String firstSeenAtSourceDays;
    public SearchAndRankCarQueryParams withFirstSeenAtSourceDays(String firstSeenAtSourceDays) {
        this.firstSeenAtSourceDays = firstSeenAtSourceDays;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_seen_at_source_range")
    public String firstSeenAtSourceRange;
    public SearchAndRankCarQueryParams withFirstSeenAtSourceRange(String firstSeenAtSourceRange) {
        this.firstSeenAtSourceRange = firstSeenAtSourceRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_seen_days")
    public String firstSeenDays;
    public SearchAndRankCarQueryParams withFirstSeenDays(String firstSeenDays) {
        this.firstSeenDays = firstSeenDays;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_seen_range")
    public String firstSeenRange;
    public SearchAndRankCarQueryParams withFirstSeenRange(String firstSeenRange) {
        this.firstSeenRange = firstSeenRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fuel_type")
    public String fuelType;
    public SearchAndRankCarQueryParams withFuelType(String fuelType) {
        this.fuelType = fuelType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=highway_mpg_range")
    public String highwayMpgRange;
    public SearchAndRankCarQueryParams withHighwayMpgRange(String highwayMpgRange) {
        this.highwayMpgRange = highwayMpgRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_finance")
    public Boolean includeFinance;
    public SearchAndRankCarQueryParams withIncludeFinance(Boolean includeFinance) {
        this.includeFinance = includeFinance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_lease")
    public Boolean includeLease;
    public SearchAndRankCarQueryParams withIncludeLease(Boolean includeLease) {
        this.includeLease = includeLease;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_non_vin_listings")
    public Boolean includeNonVinListings;
    public SearchAndRankCarQueryParams withIncludeNonVinListings(Boolean includeNonVinListings) {
        this.includeNonVinListings = includeNonVinListings;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interior_color")
    public String interiorColor;
    public SearchAndRankCarQueryParams withInteriorColor(String interiorColor) {
        this.interiorColor = interiorColor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=inventory_type")
    public openapisdk.models.shared.InventoryTypeEnum inventoryType;
    public SearchAndRankCarQueryParams withInventoryType(openapisdk.models.shared.InventoryTypeEnum inventoryType) {
        this.inventoryType = inventoryType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_seen_days")
    public String lastSeenDays;
    public SearchAndRankCarQueryParams withLastSeenDays(String lastSeenDays) {
        this.lastSeenDays = lastSeenDays;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_seen_range")
    public String lastSeenRange;
    public SearchAndRankCarQueryParams withLastSeenRange(String lastSeenRange) {
        this.lastSeenRange = lastSeenRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=latitude")
    public Double latitude;
    public SearchAndRankCarQueryParams withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lease_down_payment")
    public String leaseDownPayment;
    public SearchAndRankCarQueryParams withLeaseDownPayment(String leaseDownPayment) {
        this.leaseDownPayment = leaseDownPayment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lease_emp")
    public String leaseEmp;
    public SearchAndRankCarQueryParams withLeaseEmp(String leaseEmp) {
        this.leaseEmp = leaseEmp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lease_term")
    public String leaseTerm;
    public SearchAndRankCarQueryParams withLeaseTerm(String leaseTerm) {
        this.leaseTerm = leaseTerm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=longitude")
    public Double longitude;
    public SearchAndRankCarQueryParams withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=make")
    public String make;
    public SearchAndRankCarQueryParams withMake(String make) {
        this.make = make;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=match")
    public String match;
    public SearchAndRankCarQueryParams withMatch(String match) {
        this.match = match;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=miles_range")
    public String milesRange;
    public SearchAndRankCarQueryParams withMilesRange(String milesRange) {
        this.milesRange = milesRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=model")
    public String model;
    public SearchAndRankCarQueryParams withModel(String model) {
        this.model = model;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=msa_code")
    public String msaCode;
    public SearchAndRankCarQueryParams withMsaCode(String msaCode) {
        this.msaCode = msaCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=msrp_range")
    public String msrpRange;
    public SearchAndRankCarQueryParams withMsrpRange(String msrpRange) {
        this.msrpRange = msrpRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nodedup")
    public Boolean nodedup;
    public SearchAndRankCarQueryParams withNodedup(Boolean nodedup) {
        this.nodedup = nodedup;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=owned")
    public Boolean owned;
    public SearchAndRankCarQueryParams withOwned(Boolean owned) {
        this.owned = owned;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public SearchAndRankCarQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=photo_links")
    public Boolean photoLinks;
    public SearchAndRankCarQueryParams withPhotoLinks(Boolean photoLinks) {
        this.photoLinks = photoLinks;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=plot")
    public Boolean plot;
    public SearchAndRankCarQueryParams withPlot(Boolean plot) {
        this.plot = plot;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=price_range")
    public String priceRange;
    public SearchAndRankCarQueryParams withPriceRange(String priceRange) {
        this.priceRange = priceRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=radius")
    public Integer radius;
    public SearchAndRankCarQueryParams withRadius(Integer radius) {
        this.radius = radius;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=range_facets")
    public String rangeFacets;
    public SearchAndRankCarQueryParams withRangeFacets(String rangeFacets) {
        this.rangeFacets = rangeFacets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rows")
    public Integer rows;
    public SearchAndRankCarQueryParams withRows(Integer rows) {
        this.rows = rows;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public String sortBy;
    public SearchAndRankCarQueryParams withSortBy(String sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_order")
    public openapisdk.models.shared.SortOrderEnum sortOrder;
    public SearchAndRankCarQueryParams withSortOrder(openapisdk.models.shared.SortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public SearchAndRankCarQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public SearchAndRankCarQueryParams withState(String state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stats")
    public String stats;
    public SearchAndRankCarQueryParams withStats(String stats) {
        this.stats = stats;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stock_no")
    public String stockNo;
    public SearchAndRankCarQueryParams withStockNo(String stockNo) {
        this.stockNo = stockNo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=taxonomy_vins")
    public String taxonomyVins;
    public SearchAndRankCarQueryParams withTaxonomyVins(String taxonomyVins) {
        this.taxonomyVins = taxonomyVins;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=transmission")
    public String transmission;
    public SearchAndRankCarQueryParams withTransmission(String transmission) {
        this.transmission = transmission;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trim")
    public String trim;
    public SearchAndRankCarQueryParams withTrim(String trim) {
        this.trim = trim;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trim_o")
    public String trimO;
    public SearchAndRankCarQueryParams withTrimO(String trimO) {
        this.trimO = trimO;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trim_r")
    public String trimR;
    public SearchAndRankCarQueryParams withTrimR(String trimR) {
        this.trimR = trimR;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicle_type")
    public String vehicleType;
    public SearchAndRankCarQueryParams withVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vin")
    public String vin;
    public SearchAndRankCarQueryParams withVin(String vin) {
        this.vin = vin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vins")
    public String vins;
    public SearchAndRankCarQueryParams withVins(String vins) {
        this.vins = vins;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public String year;
    public SearchAndRankCarQueryParams withYear(String year) {
        this.year = year;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ymmt")
    public String ymmt;
    public SearchAndRankCarQueryParams withYmmt(String ymmt) {
        this.ymmt = ymmt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=zip")
    public String zip;
    public SearchAndRankCarQueryParams withZip(String zip) {
        this.zip = zip;
        return this;
    }
}
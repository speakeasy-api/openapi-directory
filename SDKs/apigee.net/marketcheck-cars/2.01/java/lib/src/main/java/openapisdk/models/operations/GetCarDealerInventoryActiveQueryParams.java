package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCarDealerInventoryActiveQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetCarDealerInventoryActiveQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=append_api_key")
    public Boolean appendApiKey;
    public GetCarDealerInventoryActiveQueryParams withAppendApiKey(Boolean appendApiKey) {
        this.appendApiKey = appendApiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=base_exterior_color")
    public String baseExteriorColor;
    public GetCarDealerInventoryActiveQueryParams withBaseExteriorColor(String baseExteriorColor) {
        this.baseExteriorColor = baseExteriorColor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=base_interior_color")
    public String baseInteriorColor;
    public GetCarDealerInventoryActiveQueryParams withBaseInteriorColor(String baseInteriorColor) {
        this.baseInteriorColor = baseInteriorColor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=body_subtype")
    public String bodySubtype;
    public GetCarDealerInventoryActiveQueryParams withBodySubtype(String bodySubtype) {
        this.bodySubtype = bodySubtype;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=body_type")
    public String bodyType;
    public GetCarDealerInventoryActiveQueryParams withBodyType(String bodyType) {
        this.bodyType = bodyType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=car_type")
    public openapisdk.models.shared.CarCarTypeEnum carType;
    public GetCarDealerInventoryActiveQueryParams withCarType(openapisdk.models.shared.CarCarTypeEnum carType) {
        this.carType = carType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=carfax_1_owner")
    public openapisdk.models.shared.Carfax1OwnerEnum carfax1Owner;
    public GetCarDealerInventoryActiveQueryParams withCarfax1Owner(openapisdk.models.shared.Carfax1OwnerEnum carfax1Owner) {
        this.carfax1Owner = carfax1Owner;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=carfax_clean_title")
    public openapisdk.models.shared.CarfaxCleanTitleEnum carfaxCleanTitle;
    public GetCarDealerInventoryActiveQueryParams withCarfaxCleanTitle(openapisdk.models.shared.CarfaxCleanTitleEnum carfaxCleanTitle) {
        this.carfaxCleanTitle = carfaxCleanTitle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city")
    public String city;
    public GetCarDealerInventoryActiveQueryParams withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city_mpg_range")
    public String cityMpgRange;
    public GetCarDealerInventoryActiveQueryParams withCityMpgRange(String cityMpgRange) {
        this.cityMpgRange = cityMpgRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public openapisdk.models.shared.CarCountryEnum country;
    public GetCarDealerInventoryActiveQueryParams withCountry(openapisdk.models.shared.CarCountryEnum country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cylinders")
    public String cylinders;
    public GetCarDealerInventoryActiveQueryParams withCylinders(String cylinders) {
        this.cylinders = cylinders;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dealer_id")
    public String dealerId;
    public GetCarDealerInventoryActiveQueryParams withDealerId(String dealerId) {
        this.dealerId = dealerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dealer_name")
    public String dealerName;
    public GetCarDealerInventoryActiveQueryParams withDealerName(String dealerName) {
        this.dealerName = dealerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dealer_type")
    public openapisdk.models.shared.DealerTypeEnum dealerType;
    public GetCarDealerInventoryActiveQueryParams withDealerType(openapisdk.models.shared.DealerTypeEnum dealerType) {
        this.dealerType = dealerType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dealership_group_name")
    public String dealershipGroupName;
    public GetCarDealerInventoryActiveQueryParams withDealershipGroupName(String dealershipGroupName) {
        this.dealershipGroupName = dealershipGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dedup")
    public Boolean dedup;
    public GetCarDealerInventoryActiveQueryParams withDedup(Boolean dedup) {
        this.dedup = dedup;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dom_180_range")
    public String dom180Range;
    public GetCarDealerInventoryActiveQueryParams withDom180Range(String dom180Range) {
        this.dom180Range = dom180Range;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dom_active_range")
    public String domActiveRange;
    public GetCarDealerInventoryActiveQueryParams withDomActiveRange(String domActiveRange) {
        this.domActiveRange = domActiveRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dom_range")
    public String domRange;
    public GetCarDealerInventoryActiveQueryParams withDomRange(String domRange) {
        this.domRange = domRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doors")
    public String doors;
    public GetCarDealerInventoryActiveQueryParams withDoors(String doors) {
        this.doors = doors;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=drivetrain")
    public String drivetrain;
    public GetCarDealerInventoryActiveQueryParams withDrivetrain(String drivetrain) {
        this.drivetrain = drivetrain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=engine")
    public String engine;
    public GetCarDealerInventoryActiveQueryParams withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=engine_aspiration")
    public String engineAspiration;
    public GetCarDealerInventoryActiveQueryParams withEngineAspiration(String engineAspiration) {
        this.engineAspiration = engineAspiration;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=engine_block")
    public String engineBlock;
    public GetCarDealerInventoryActiveQueryParams withEngineBlock(String engineBlock) {
        this.engineBlock = engineBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=engine_size")
    public String engineSize;
    public GetCarDealerInventoryActiveQueryParams withEngineSize(String engineSize) {
        this.engineSize = engineSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_certified")
    public Boolean excludeCertified;
    public GetCarDealerInventoryActiveQueryParams withExcludeCertified(Boolean excludeCertified) {
        this.excludeCertified = excludeCertified;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exterior_color")
    public String exteriorColor;
    public GetCarDealerInventoryActiveQueryParams withExteriorColor(String exteriorColor) {
        this.exteriorColor = exteriorColor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facet_sort")
    public openapisdk.models.shared.FacetSortEnum facetSort;
    public GetCarDealerInventoryActiveQueryParams withFacetSort(openapisdk.models.shared.FacetSortEnum facetSort) {
        this.facetSort = facetSort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facets")
    public String facets;
    public GetCarDealerInventoryActiveQueryParams withFacets(String facets) {
        this.facets = facets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=finance_down_payment")
    public String financeDownPayment;
    public GetCarDealerInventoryActiveQueryParams withFinanceDownPayment(String financeDownPayment) {
        this.financeDownPayment = financeDownPayment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=finance_down_payment_per")
    public String financeDownPaymentPer;
    public GetCarDealerInventoryActiveQueryParams withFinanceDownPaymentPer(String financeDownPaymentPer) {
        this.financeDownPaymentPer = financeDownPaymentPer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=finance_emp")
    public String financeEmp;
    public GetCarDealerInventoryActiveQueryParams withFinanceEmp(String financeEmp) {
        this.financeEmp = financeEmp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=finance_loan_apr")
    public String financeLoanApr;
    public GetCarDealerInventoryActiveQueryParams withFinanceLoanApr(String financeLoanApr) {
        this.financeLoanApr = financeLoanApr;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=finance_loan_term")
    public String financeLoanTerm;
    public GetCarDealerInventoryActiveQueryParams withFinanceLoanTerm(String financeLoanTerm) {
        this.financeLoanTerm = financeLoanTerm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_seen_at_mc_days")
    public String firstSeenAtMcDays;
    public GetCarDealerInventoryActiveQueryParams withFirstSeenAtMcDays(String firstSeenAtMcDays) {
        this.firstSeenAtMcDays = firstSeenAtMcDays;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_seen_at_mc_range")
    public String firstSeenAtMcRange;
    public GetCarDealerInventoryActiveQueryParams withFirstSeenAtMcRange(String firstSeenAtMcRange) {
        this.firstSeenAtMcRange = firstSeenAtMcRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_seen_at_source_days")
    public String firstSeenAtSourceDays;
    public GetCarDealerInventoryActiveQueryParams withFirstSeenAtSourceDays(String firstSeenAtSourceDays) {
        this.firstSeenAtSourceDays = firstSeenAtSourceDays;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_seen_at_source_range")
    public String firstSeenAtSourceRange;
    public GetCarDealerInventoryActiveQueryParams withFirstSeenAtSourceRange(String firstSeenAtSourceRange) {
        this.firstSeenAtSourceRange = firstSeenAtSourceRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_seen_days")
    public String firstSeenDays;
    public GetCarDealerInventoryActiveQueryParams withFirstSeenDays(String firstSeenDays) {
        this.firstSeenDays = firstSeenDays;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_seen_range")
    public String firstSeenRange;
    public GetCarDealerInventoryActiveQueryParams withFirstSeenRange(String firstSeenRange) {
        this.firstSeenRange = firstSeenRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fuel_type")
    public String fuelType;
    public GetCarDealerInventoryActiveQueryParams withFuelType(String fuelType) {
        this.fuelType = fuelType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=highway_mpg_range")
    public String highwayMpgRange;
    public GetCarDealerInventoryActiveQueryParams withHighwayMpgRange(String highwayMpgRange) {
        this.highwayMpgRange = highwayMpgRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_finance")
    public Boolean includeFinance;
    public GetCarDealerInventoryActiveQueryParams withIncludeFinance(Boolean includeFinance) {
        this.includeFinance = includeFinance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_lease")
    public Boolean includeLease;
    public GetCarDealerInventoryActiveQueryParams withIncludeLease(Boolean includeLease) {
        this.includeLease = includeLease;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_non_vin_listings")
    public Boolean includeNonVinListings;
    public GetCarDealerInventoryActiveQueryParams withIncludeNonVinListings(Boolean includeNonVinListings) {
        this.includeNonVinListings = includeNonVinListings;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_relevant_links")
    public Boolean includeRelevantLinks;
    public GetCarDealerInventoryActiveQueryParams withIncludeRelevantLinks(Boolean includeRelevantLinks) {
        this.includeRelevantLinks = includeRelevantLinks;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=interior_color")
    public String interiorColor;
    public GetCarDealerInventoryActiveQueryParams withInteriorColor(String interiorColor) {
        this.interiorColor = interiorColor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_seen_days")
    public String lastSeenDays;
    public GetCarDealerInventoryActiveQueryParams withLastSeenDays(String lastSeenDays) {
        this.lastSeenDays = lastSeenDays;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_seen_range")
    public String lastSeenRange;
    public GetCarDealerInventoryActiveQueryParams withLastSeenRange(String lastSeenRange) {
        this.lastSeenRange = lastSeenRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=latitude")
    public Double latitude;
    public GetCarDealerInventoryActiveQueryParams withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lease_down_payment")
    public String leaseDownPayment;
    public GetCarDealerInventoryActiveQueryParams withLeaseDownPayment(String leaseDownPayment) {
        this.leaseDownPayment = leaseDownPayment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lease_emp")
    public String leaseEmp;
    public GetCarDealerInventoryActiveQueryParams withLeaseEmp(String leaseEmp) {
        this.leaseEmp = leaseEmp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lease_term")
    public String leaseTerm;
    public GetCarDealerInventoryActiveQueryParams withLeaseTerm(String leaseTerm) {
        this.leaseTerm = leaseTerm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=longitude")
    public Double longitude;
    public GetCarDealerInventoryActiveQueryParams withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=make")
    public String make;
    public GetCarDealerInventoryActiveQueryParams withMake(String make) {
        this.make = make;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=match")
    public String match;
    public GetCarDealerInventoryActiveQueryParams withMatch(String match) {
        this.match = match;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=miles_range")
    public String milesRange;
    public GetCarDealerInventoryActiveQueryParams withMilesRange(String milesRange) {
        this.milesRange = milesRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mm")
    public String mm;
    public GetCarDealerInventoryActiveQueryParams withMm(String mm) {
        this.mm = mm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=model")
    public String model;
    public GetCarDealerInventoryActiveQueryParams withModel(String model) {
        this.model = model;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=msa_code")
    public String msaCode;
    public GetCarDealerInventoryActiveQueryParams withMsaCode(String msaCode) {
        this.msaCode = msaCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=msrp_range")
    public String msrpRange;
    public GetCarDealerInventoryActiveQueryParams withMsrpRange(String msrpRange) {
        this.msrpRange = msrpRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nodedup")
    public Boolean nodedup;
    public GetCarDealerInventoryActiveQueryParams withNodedup(Boolean nodedup) {
        this.nodedup = nodedup;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=owned")
    public Boolean owned;
    public GetCarDealerInventoryActiveQueryParams withOwned(Boolean owned) {
        this.owned = owned;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=photo_links")
    public Boolean photoLinks;
    public GetCarDealerInventoryActiveQueryParams withPhotoLinks(Boolean photoLinks) {
        this.photoLinks = photoLinks;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=plot")
    public Boolean plot;
    public GetCarDealerInventoryActiveQueryParams withPlot(Boolean plot) {
        this.plot = plot;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=price_range")
    public String priceRange;
    public GetCarDealerInventoryActiveQueryParams withPriceRange(String priceRange) {
        this.priceRange = priceRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=radius")
    public Integer radius;
    public GetCarDealerInventoryActiveQueryParams withRadius(Integer radius) {
        this.radius = radius;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=range_facets")
    public String rangeFacets;
    public GetCarDealerInventoryActiveQueryParams withRangeFacets(String rangeFacets) {
        this.rangeFacets = rangeFacets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rows")
    public Integer rows;
    public GetCarDealerInventoryActiveQueryParams withRows(Integer rows) {
        this.rows = rows;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public String sortBy;
    public GetCarDealerInventoryActiveQueryParams withSortBy(String sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_order")
    public openapisdk.models.shared.SortOrderEnum sortOrder;
    public GetCarDealerInventoryActiveQueryParams withSortOrder(openapisdk.models.shared.SortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public String source;
    public GetCarDealerInventoryActiveQueryParams withSource(String source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public GetCarDealerInventoryActiveQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public GetCarDealerInventoryActiveQueryParams withState(String state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stats")
    public String stats;
    public GetCarDealerInventoryActiveQueryParams withStats(String stats) {
        this.stats = stats;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stock_no")
    public String stockNo;
    public GetCarDealerInventoryActiveQueryParams withStockNo(String stockNo) {
        this.stockNo = stockNo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=taxonomy_vins")
    public String taxonomyVins;
    public GetCarDealerInventoryActiveQueryParams withTaxonomyVins(String taxonomyVins) {
        this.taxonomyVins = taxonomyVins;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=transmission")
    public String transmission;
    public GetCarDealerInventoryActiveQueryParams withTransmission(String transmission) {
        this.transmission = transmission;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trim")
    public String trim;
    public GetCarDealerInventoryActiveQueryParams withTrim(String trim) {
        this.trim = trim;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trim_o")
    public String trimO;
    public GetCarDealerInventoryActiveQueryParams withTrimO(String trimO) {
        this.trimO = trimO;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trim_r")
    public String trimR;
    public GetCarDealerInventoryActiveQueryParams withTrimR(String trimR) {
        this.trimR = trimR;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicle_type")
    public String vehicleType;
    public GetCarDealerInventoryActiveQueryParams withVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vin")
    public String vin;
    public GetCarDealerInventoryActiveQueryParams withVin(String vin) {
        this.vin = vin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vins")
    public String vins;
    public GetCarDealerInventoryActiveQueryParams withVins(String vins) {
        this.vins = vins;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public String year;
    public GetCarDealerInventoryActiveQueryParams withYear(String year) {
        this.year = year;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ymm")
    public String ymm;
    public GetCarDealerInventoryActiveQueryParams withYmm(String ymm) {
        this.ymm = ymm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ymmt")
    public String ymmt;
    public GetCarDealerInventoryActiveQueryParams withYmmt(String ymmt) {
        this.ymmt = ymmt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=zip")
    public String zip;
    public GetCarDealerInventoryActiveQueryParams withZip(String zip) {
        this.zip = zip;
        return this;
    }
}
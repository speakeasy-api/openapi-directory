package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchCarIncentiveOemQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=acquisition_fee")
    public String acquisitionFee;
    public GetSearchCarIncentiveOemQueryParams withAcquisitionFee(String acquisitionFee) {
        this.acquisitionFee = acquisitionFee;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetSearchCarIncentiveOemQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apr")
    public String apr;
    public GetSearchCarIncentiveOemQueryParams withApr(String apr) {
        this.apr = apr;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cashback_amount")
    public String cashbackAmount;
    public GetSearchCarIncentiveOemQueryParams withCashbackAmount(String cashbackAmount) {
        this.cashbackAmount = cashbackAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cashback_target_group")
    public String cashbackTargetGroup;
    public GetSearchCarIncentiveOemQueryParams withCashbackTargetGroup(String cashbackTargetGroup) {
        this.cashbackTargetGroup = cashbackTargetGroup;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city")
    public String city;
    public GetSearchCarIncentiveOemQueryParams withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public openapisdk.models.shared.CountryEnum country;
    public GetSearchCarIncentiveOemQueryParams withCountry(openapisdk.models.shared.CountryEnum country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dealer_contribution")
    public String dealerContribution;
    public GetSearchCarIncentiveOemQueryParams withDealerContribution(String dealerContribution) {
        this.dealerContribution = dealerContribution;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disposition_fee")
    public String dispositionFee;
    public GetSearchCarIncentiveOemQueryParams withDispositionFee(String dispositionFee) {
        this.dispositionFee = dispositionFee;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=down_payment")
    public String downPayment;
    public GetSearchCarIncentiveOemQueryParams withDownPayment(String downPayment) {
        this.downPayment = downPayment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=due_at_signing")
    public String dueAtSigning;
    public GetSearchCarIncentiveOemQueryParams withDueAtSigning(String dueAtSigning) {
        this.dueAtSigning = dueAtSigning;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=duration")
    public String duration;
    public GetSearchCarIncentiveOemQueryParams withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facet_sort")
    public openapisdk.models.shared.FacetSortEnum facetSort;
    public GetSearchCarIncentiveOemQueryParams withFacetSort(openapisdk.models.shared.FacetSortEnum facetSort) {
        this.facetSort = facetSort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facets")
    public String facets;
    public GetSearchCarIncentiveOemQueryParams withFacets(String facets) {
        this.facets = facets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=first_seen_range")
    public String firstSeenRange;
    public GetSearchCarIncentiveOemQueryParams withFirstSeenRange(String firstSeenRange) {
        this.firstSeenRange = firstSeenRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gross_capitalised_cost")
    public String grossCapitalisedCost;
    public GetSearchCarIncentiveOemQueryParams withGrossCapitalisedCost(String grossCapitalisedCost) {
        this.grossCapitalisedCost = grossCapitalisedCost;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=last_seen_range")
    public String lastSeenRange;
    public GetSearchCarIncentiveOemQueryParams withLastSeenRange(String lastSeenRange) {
        this.lastSeenRange = lastSeenRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=latitude")
    public Double latitude;
    public GetSearchCarIncentiveOemQueryParams withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lease_end_purchase_option")
    public String leaseEndPurchaseOption;
    public GetSearchCarIncentiveOemQueryParams withLeaseEndPurchaseOption(String leaseEndPurchaseOption) {
        this.leaseEndPurchaseOption = leaseEndPurchaseOption;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=longitude")
    public Double longitude;
    public GetSearchCarIncentiveOemQueryParams withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=make")
    public String make;
    public GetSearchCarIncentiveOemQueryParams withMake(String make) {
        this.make = make;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mileage_charge")
    public String mileageCharge;
    public GetSearchCarIncentiveOemQueryParams withMileageCharge(String mileageCharge) {
        this.mileageCharge = mileageCharge;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mileage_charge_limit")
    public String mileageChargeLimit;
    public GetSearchCarIncentiveOemQueryParams withMileageChargeLimit(String mileageChargeLimit) {
        this.mileageChargeLimit = mileageChargeLimit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=model")
    public String model;
    public GetSearchCarIncentiveOemQueryParams withModel(String model) {
        this.model = model;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=monthly")
    public String monthly;
    public GetSearchCarIncentiveOemQueryParams withMonthly(String monthly) {
        this.monthly = monthly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=monthly_per_thousand")
    public String monthlyPerThousand;
    public GetSearchCarIncentiveOemQueryParams withMonthlyPerThousand(String monthlyPerThousand) {
        this.monthlyPerThousand = monthlyPerThousand;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=msrp")
    public String msrp;
    public GetSearchCarIncentiveOemQueryParams withMsrp(String msrp) {
        this.msrp = msrp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=net_capitalised_cost")
    public String netCapitalisedCost;
    public GetSearchCarIncentiveOemQueryParams withNetCapitalisedCost(String netCapitalisedCost) {
        this.netCapitalisedCost = netCapitalisedCost;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offer_type")
    public openapisdk.models.shared.ApiKeyEnum3 offerType;
    public GetSearchCarIncentiveOemQueryParams withOfferType(openapisdk.models.shared.ApiKeyEnum3 offerType) {
        this.offerType = offerType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=radius")
    public Integer radius;
    public GetSearchCarIncentiveOemQueryParams withRadius(Integer radius) {
        this.radius = radius;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=range_facets")
    public String rangeFacets;
    public GetSearchCarIncentiveOemQueryParams withRangeFacets(String rangeFacets) {
        this.rangeFacets = rangeFacets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rows")
    public Integer rows;
    public GetSearchCarIncentiveOemQueryParams withRows(Integer rows) {
        this.rows = rows;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search_text")
    public String searchText;
    public GetSearchCarIncentiveOemQueryParams withSearchText(String searchText) {
        this.searchText = searchText;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=security_deposit")
    public String securityDeposit;
    public GetSearchCarIncentiveOemQueryParams withSecurityDeposit(String securityDeposit) {
        this.securityDeposit = securityDeposit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public String sortBy;
    public GetSearchCarIncentiveOemQueryParams withSortBy(String sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_order")
    public openapisdk.models.shared.SortOrderEnum sortOrder;
    public GetSearchCarIncentiveOemQueryParams withSortOrder(openapisdk.models.shared.SortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public GetSearchCarIncentiveOemQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public GetSearchCarIncentiveOemQueryParams withState(String state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stats")
    public String stats;
    public GetSearchCarIncentiveOemQueryParams withStats(String stats) {
        this.stats = stats;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=total_monthly_payment")
    public String totalMonthlyPayment;
    public GetSearchCarIncentiveOemQueryParams withTotalMonthlyPayment(String totalMonthlyPayment) {
        this.totalMonthlyPayment = totalMonthlyPayment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trim")
    public String trim;
    public GetSearchCarIncentiveOemQueryParams withTrim(String trim) {
        this.trim = trim;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public String year;
    public GetSearchCarIncentiveOemQueryParams withYear(String year) {
        this.year = year;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=zip")
    public String zip;
    public GetSearchCarIncentiveOemQueryParams withZip(String zip) {
        this.zip = zip;
        return this;
    }
}
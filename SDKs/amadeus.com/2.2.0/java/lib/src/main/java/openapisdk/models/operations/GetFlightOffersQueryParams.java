package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetFlightOffersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=adults")
    public Long adults;
    public GetFlightOffersQueryParams withAdults(Long adults) {
        this.adults = adults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=children")
    public Long children;
    public GetFlightOffersQueryParams withChildren(Long children) {
        this.children = children;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currencyCode")
    public String currencyCode;
    public GetFlightOffersQueryParams withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=departureDate")
    public LocalDate departureDate;
    public GetFlightOffersQueryParams withDepartureDate(LocalDate departureDate) {
        this.departureDate = departureDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=destinationLocationCode")
    public String destinationLocationCode;
    public GetFlightOffersQueryParams withDestinationLocationCode(String destinationLocationCode) {
        this.destinationLocationCode = destinationLocationCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=excludedAirlineCodes")
    public String excludedAirlineCodes;
    public GetFlightOffersQueryParams withExcludedAirlineCodes(String excludedAirlineCodes) {
        this.excludedAirlineCodes = excludedAirlineCodes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=includedAirlineCodes")
    public String includedAirlineCodes;
    public GetFlightOffersQueryParams withIncludedAirlineCodes(String includedAirlineCodes) {
        this.includedAirlineCodes = includedAirlineCodes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=infants")
    public Long infants;
    public GetFlightOffersQueryParams withInfants(Long infants) {
        this.infants = infants;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public GetFlightOffersQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxPrice")
    public Long maxPrice;
    public GetFlightOffersQueryParams withMaxPrice(Long maxPrice) {
        this.maxPrice = maxPrice;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nonStop")
    public Boolean nonStop;
    public GetFlightOffersQueryParams withNonStop(Boolean nonStop) {
        this.nonStop = nonStop;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=originLocationCode")
    public String originLocationCode;
    public GetFlightOffersQueryParams withOriginLocationCode(String originLocationCode) {
        this.originLocationCode = originLocationCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=returnDate")
    public LocalDate returnDate;
    public GetFlightOffersQueryParams withReturnDate(LocalDate returnDate) {
        this.returnDate = returnDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=travelClass")
    public GetFlightOffersTravelClassEnum travelClass;
    public GetFlightOffersQueryParams withTravelClass(GetFlightOffersTravelClassEnum travelClass) {
        this.travelClass = travelClass;
        return this;
    }
}
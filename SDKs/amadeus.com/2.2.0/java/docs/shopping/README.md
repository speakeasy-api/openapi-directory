# shopping

### Available Operations

* [getFlightOffers](#getflightoffers) - Return list of Flight Offers based on searching criteria.
* [searchFlightOffers](#searchflightoffers) - Return list of Flight Offers based on posted searching criteria.

## getFlightOffers

Return list of Flight Offers based on searching criteria.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFlightOffersRequest;
import org.openapis.openapi.models.operations.GetFlightOffersResponse;
import org.openapis.openapi.models.operations.GetFlightOffersTravelClassEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFlightOffersRequest req = new GetFlightOffersRequest(56713L, LocalDate.parse("2022-03-08"), "suscipit", "molestiae") {{
                children = 791725L;
                currencyCode = "placeat";
                excludedAirlineCodes = "voluptatum";
                includedAirlineCodes = "iusto";
                infants = 568045L;
                max = 392785L;
                maxPrice = 925597L;
                nonStop = false;
                returnDate = LocalDate.parse("2022-10-15");
                travelClass = GetFlightOffersTravelClassEnum.PREMIUM_ECONOMY;
            }};            

            GetFlightOffersResponse res = sdk.shopping.getFlightOffers(req);

            if (res.success != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchFlightOffers

Return list of Flight Offers based on posted searching criteria.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchFlightOffersRequest;
import org.openapis.openapi.models.operations.SearchFlightOffersResponse;
import org.openapis.openapi.models.shared.CoverageEnum;
import org.openapis.openapi.models.shared.DateTimeRange;
import org.openapis.openapi.models.shared.ExtendedPricingOptions;
import org.openapis.openapi.models.shared.FlightOfferSourceEnum;
import org.openapis.openapi.models.shared.GetFlightOffersQuery;
import org.openapis.openapi.models.shared.OriginDestination;
import org.openapis.openapi.models.shared.SearchCriteria;
import org.openapis.openapi.models.shared.SearchCriteriaAdditionalInformation;
import org.openapis.openapi.models.shared.SearchCriteriaFlightFilters;
import org.openapis.openapi.models.shared.SearchCriteriaFlightFiltersCabinRestriction;
import org.openapis.openapi.models.shared.SearchCriteriaFlightFiltersCarrierRestrictions;
import org.openapis.openapi.models.shared.SearchCriteriaFlightFiltersConnectionRestriction;
import org.openapis.openapi.models.shared.TravelClassEnum;
import org.openapis.openapi.models.shared.Traveler;
import org.openapis.openapi.models.shared.TravelerTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchFlightOffersRequest req = new SearchFlightOffersRequest(                new GetFlightOffersQuery(                new org.openapis.openapi.models.shared.OriginDestination[]{{
                                                add(new OriginDestination() {{
                                                    alternativeDestinationsCodes = new String[]{{
                                                        add("perferendis"),
                                                        add("ipsam"),
                                                        add("repellendus"),
                                                    }};
                                                    alternativeOriginsCodes = new String[]{{
                                                        add("quo"),
                                                        add("odit"),
                                                        add("at"),
                                                        add("at"),
                                                    }};
                                                    arrivalDateTimeRange = new DateTimeRange(LocalDate.parse("2018-09-22")) {{
                                                        date = LocalDate.parse("2018-09-22");
                                                        dateWindow = "I3D";
                                                        time = "10:30:00";
                                                        timeWindow = "2H";
                                                    }};
                                                    departureDateTimeRange = new DateTimeRange(LocalDate.parse("2018-09-22")) {{
                                                        date = LocalDate.parse("2018-09-22");
                                                        dateWindow = "I3D";
                                                        time = "10:30:00";
                                                        timeWindow = "2H";
                                                    }};
                                                    destinationLocationCode = "NYC";
                                                    destinationRadius = 200;
                                                    excludedConnectionPoints = new String[]{{
                                                        add("molestiae"),
                                                        add("quod"),
                                                        add("quod"),
                                                        add("esse"),
                                                    }};
                                                    id = "1";
                                                    includedConnectionPoints = new String[]{{
                                                        add("porro"),
                                                        add("dolorum"),
                                                        add("dicta"),
                                                    }};
                                                    originLocationCode = "PAR";
                                                    originRadius = 200;
                                                }}),
                                            }},                 new org.openapis.openapi.models.shared.FlightOfferSourceEnum[]{{
                                                add(FlightOfferSourceEnum.GDS),
                                                add(FlightOfferSourceEnum.GDS),
                                                add(FlightOfferSourceEnum.GDS),
                                            }},                 new org.openapis.openapi.models.shared.Traveler[]{{
                                                add(new Traveler("1", TravelerTypeEnum.ADULT) {{
                                                    associatedAdultId = "occaecati";
                                                    id = "1";
                                                    travelerType = TravelerTypeEnum.ADULT;
                                                }}),
                                                add(new Traveler("1", TravelerTypeEnum.ADULT) {{
                                                    associatedAdultId = "fugit";
                                                    id = "1";
                                                    travelerType = TravelerTypeEnum.ADULT;
                                                }}),
                                                add(new Traveler("1", TravelerTypeEnum.ADULT) {{
                                                    associatedAdultId = "deleniti";
                                                    id = "1";
                                                    travelerType = TravelerTypeEnum.ADULT;
                                                }}),
                                            }}) {{
                                currencyCode = "EUR";
                                searchCriteria = new SearchCriteria() {{
                                    addOneWayOffers = true;
                                    additionalInformation = new SearchCriteriaAdditionalInformation() {{
                                        brandedFares = true;
                                        chargeableCheckedBags = true;
                                    }};;
                                    allowAlternativeFareOptions = true;
                                    excludeAllotments = false;
                                    flightFilters = new SearchCriteriaFlightFilters() {{
                                        busSegmentAllowed = true;
                                        cabinRestrictions = new org.openapis.openapi.models.shared.SearchCriteriaFlightFiltersCabinRestriction[]{{
                                            add(new SearchCriteriaFlightFiltersCabinRestriction() {{
                                                cabin = TravelClassEnum.PREMIUM_ECONOMY;
                                                coverage = CoverageEnum.MOST_SEGMENTS;
                                                originDestinationIds = new String[]{{
                                                    add("totam"),
                                                    add("beatae"),
                                                    add("commodi"),
                                                    add("molestiae"),
                                                }};
                                            }}),
                                            add(new SearchCriteriaFlightFiltersCabinRestriction() {{
                                                cabin = TravelClassEnum.PREMIUM_ECONOMY;
                                                coverage = CoverageEnum.MOST_SEGMENTS;
                                                originDestinationIds = new String[]{{
                                                    add("qui"),
                                                    add("impedit"),
                                                }};
                                            }}),
                                            add(new SearchCriteriaFlightFiltersCabinRestriction() {{
                                                cabin = TravelClassEnum.PREMIUM_ECONOMY;
                                                coverage = CoverageEnum.MOST_SEGMENTS;
                                                originDestinationIds = new String[]{{
                                                    add("esse"),
                                                    add("ipsum"),
                                                    add("excepturi"),
                                                }};
                                            }}),
                                            add(new SearchCriteriaFlightFiltersCabinRestriction() {{
                                                cabin = TravelClassEnum.PREMIUM_ECONOMY;
                                                coverage = CoverageEnum.MOST_SEGMENTS;
                                                originDestinationIds = new String[]{{
                                                    add("perferendis"),
                                                }};
                                            }}),
                                        }};
                                        carrierRestrictions = new SearchCriteriaFlightFiltersCarrierRestrictions() {{
                                            blacklistedInEUAllowed = false;
                                            excludedCarrierCodes = new String[]{{
                                                add("natus"),
                                                add("sed"),
                                            }};
                                            includedCarrierCodes = new String[]{{
                                                add("dolor"),
                                                add("natus"),
                                                add("laboriosam"),
                                            }};
                                        }};;
                                        connectionRestriction = new SearchCriteriaFlightFiltersConnectionRestriction() {{
                                            airportChangeAllowed = false;
                                            maxNumberOfConnections = 2;
                                            technicalStopsAllowed = true;
                                        }};;
                                        crossBorderAllowed = false;
                                        maxFlightTime = 200;
                                        moreOvernightsAllowed = false;
                                        railSegmentAllowed = true;
                                        returnToDepartureAirport = false;
                                    }};;
                                    maxFlightOffers = 250;
                                    maxPrice = 100L;
                                    oneFlightOfferPerDay = true;
                                    pricingOptions = new ExtendedPricingOptions() {{
                                        includedCheckedBagsOnly = true;
                                    }};;
                                }};;
                            }};, "hic");            

            SearchFlightOffersResponse res = sdk.shopping.searchFlightOffers(req);

            if (res.success != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

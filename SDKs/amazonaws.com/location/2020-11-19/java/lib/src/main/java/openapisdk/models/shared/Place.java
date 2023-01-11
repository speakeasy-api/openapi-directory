package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Place
 * Contains details about addresses or points of interest that match the search criteria.
**/
public class Place {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AddressNumber")
    public String addressNumber;
    public Place withAddressNumber(String addressNumber) {
        this.addressNumber = addressNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Country")
    public String country;
    public Place withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("Geometry")
    public PlaceGeometry geometry;
    public Place withGeometry(PlaceGeometry geometry) {
        this.geometry = geometry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Label")
    public String label;
    public Place withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Municipality")
    public String municipality;
    public Place withMunicipality(String municipality) {
        this.municipality = municipality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Neighborhood")
    public String neighborhood;
    public Place withNeighborhood(String neighborhood) {
        this.neighborhood = neighborhood;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PostalCode")
    public String postalCode;
    public Place withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Region")
    public String region;
    public Place withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Street")
    public String street;
    public Place withStreet(String street) {
        this.street = street;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubRegion")
    public String subRegion;
    public Place withSubRegion(String subRegion) {
        this.subRegion = subRegion;
        return this;
    }
}
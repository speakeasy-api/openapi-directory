package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActionRemoteIpDetails
 * For <code>AwsApiAction</code>, <code>NetworkConnectionAction</code>, and <code>PortProbeAction</code>, <code>RemoteIpDetails</code> provides information about the remote IP address that was involved in the action.
**/
public class ActionRemoteIpDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("City")
    public City city;
    public ActionRemoteIpDetails withCity(City city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Country")
    public Country country;
    public ActionRemoteIpDetails withCountry(Country country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GeoLocation")
    public GeoLocation geoLocation;
    public ActionRemoteIpDetails withGeoLocation(GeoLocation geoLocation) {
        this.geoLocation = geoLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpAddressV4")
    public String ipAddressV4;
    public ActionRemoteIpDetails withIpAddressV4(String ipAddressV4) {
        this.ipAddressV4 = ipAddressV4;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Organization")
    public IpOrganizationDetails organization;
    public ActionRemoteIpDetails withOrganization(IpOrganizationDetails organization) {
        this.organization = organization;
        return this;
    }
}
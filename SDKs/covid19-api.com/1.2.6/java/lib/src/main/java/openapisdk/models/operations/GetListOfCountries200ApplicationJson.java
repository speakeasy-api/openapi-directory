package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetListOfCountries200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alpha-2-code")
    public String alpha2Code;
    public GetListOfCountries200ApplicationJson withAlpha2Code(String alpha2Code) {
        this.alpha2Code = alpha2Code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alpha-3-code")
    public String alpha3Code;
    public GetListOfCountries200ApplicationJson withAlpha3Code(String alpha3Code) {
        this.alpha3Code = alpha3Code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Float latitude;
    public GetListOfCountries200ApplicationJson withLatitude(Float latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Float longitude;
    public GetListOfCountries200ApplicationJson withLongitude(Float longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetListOfCountries200ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
}
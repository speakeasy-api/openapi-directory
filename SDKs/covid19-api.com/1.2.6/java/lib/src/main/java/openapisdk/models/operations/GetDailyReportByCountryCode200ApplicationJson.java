package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDailyReportByCountryCode200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public GetDailyReportByCountryCode200ApplicationJson withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public GetDailyReportByCountryCode200ApplicationJson withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Float latitude;
    public GetDailyReportByCountryCode200ApplicationJson withLatitude(Float latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Float longitude;
    public GetDailyReportByCountryCode200ApplicationJson withLongitude(Float longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("province")
    public GetDailyReportByCountryCode200ApplicationJsonProvince[] province;
    public GetDailyReportByCountryCode200ApplicationJson withProvince(GetDailyReportByCountryCode200ApplicationJsonProvince[] province) {
        this.province = province;
        return this;
    }
}
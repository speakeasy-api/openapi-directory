package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppApiWmmEndpointsWmmMagneticFieldQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=altitude")
    public Double altitude;
    public AppApiWmmEndpointsWmmMagneticFieldQueryParams withAltitude(Double altitude) {
        this.altitude = altitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=latitude")
    public Double latitude;
    public AppApiWmmEndpointsWmmMagneticFieldQueryParams withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=longitude")
    public Double longitude;
    public AppApiWmmEndpointsWmmMagneticFieldQueryParams withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Double year;
    public AppApiWmmEndpointsWmmMagneticFieldQueryParams withYear(Double year) {
        this.year = year;
        return this;
    }
}
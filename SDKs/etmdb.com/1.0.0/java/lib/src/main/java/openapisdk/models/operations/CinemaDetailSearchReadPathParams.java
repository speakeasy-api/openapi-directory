package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CinemaDetailSearchReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cinema_name")
    public String cinemaName;
    public CinemaDetailSearchReadPathParams withCinemaName(String cinemaName) {
        this.cinemaName = cinemaName;
        return this;
    }
}
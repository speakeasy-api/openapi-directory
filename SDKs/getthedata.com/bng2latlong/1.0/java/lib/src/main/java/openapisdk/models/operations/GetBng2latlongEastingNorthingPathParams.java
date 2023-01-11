package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBng2latlongEastingNorthingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=easting")
    public Long easting;
    public GetBng2latlongEastingNorthingPathParams withEasting(Long easting) {
        this.easting = easting;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=northing")
    public Long northing;
    public GetBng2latlongEastingNorthingPathParams withNorthing(Long northing) {
        this.northing = northing;
        return this;
    }
}
package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV4LayersScoutingObservationsScoutingObservationIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scoutingObservationId")
    public String scoutingObservationId;
    public GetV4LayersScoutingObservationsScoutingObservationIdPathParams withScoutingObservationId(String scoutingObservationId) {
        this.scoutingObservationId = scoutingObservationId;
        return this;
    }
}
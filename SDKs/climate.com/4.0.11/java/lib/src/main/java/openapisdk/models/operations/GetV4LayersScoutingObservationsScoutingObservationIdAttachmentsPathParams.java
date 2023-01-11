package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scoutingObservationId")
    public String scoutingObservationId;
    public GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsPathParams withScoutingObservationId(String scoutingObservationId) {
        this.scoutingObservationId = scoutingObservationId;
        return this;
    }
}
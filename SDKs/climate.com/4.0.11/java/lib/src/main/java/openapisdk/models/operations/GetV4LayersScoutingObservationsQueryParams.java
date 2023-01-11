package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetV4LayersScoutingObservationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurredAfter")
    public OffsetDateTime occurredAfter;
    public GetV4LayersScoutingObservationsQueryParams withOccurredAfter(OffsetDateTime occurredAfter) {
        this.occurredAfter = occurredAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurredBefore")
    public OffsetDateTime occurredBefore;
    public GetV4LayersScoutingObservationsQueryParams withOccurredBefore(OffsetDateTime occurredBefore) {
        this.occurredBefore = occurredBefore;
        return this;
    }
}
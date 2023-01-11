package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateJourneyRequestBody {
    @JsonProperty("WriteJourneyRequest")
    public UpdateJourneyRequestBodyWriteJourneyRequest writeJourneyRequest;
    public UpdateJourneyRequestBody withWriteJourneyRequest(UpdateJourneyRequestBodyWriteJourneyRequest writeJourneyRequest) {
        this.writeJourneyRequest = writeJourneyRequest;
        return this;
    }
}
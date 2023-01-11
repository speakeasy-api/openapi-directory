package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateJourneyRequestBody {
    @JsonProperty("WriteJourneyRequest")
    public CreateJourneyRequestBodyWriteJourneyRequest writeJourneyRequest;
    public CreateJourneyRequestBody withWriteJourneyRequest(CreateJourneyRequestBodyWriteJourneyRequest writeJourneyRequest) {
        this.writeJourneyRequest = writeJourneyRequest;
        return this;
    }
}
package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateParticipantConnectionRequestBody {
    @JsonProperty("Type")
    public openapisdk.models.shared.ConnectionTypeEnum[] type;
    public CreateParticipantConnectionRequestBody withType(openapisdk.models.shared.ConnectionTypeEnum[] type) {
        this.type = type;
        return this;
    }
}
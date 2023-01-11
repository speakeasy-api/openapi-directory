package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateMemberSessionRequestBody {
    @JsonProperty("status")
    public UpdateMemberSessionRequestBodyStatusEnum status;
    public UpdateMemberSessionRequestBody withStatus(UpdateMemberSessionRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
}
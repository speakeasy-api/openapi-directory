package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateApplicationSettingsRequestBody {
    @JsonProperty("WriteApplicationSettingsRequest")
    public UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest writeApplicationSettingsRequest;
    public UpdateApplicationSettingsRequestBody withWriteApplicationSettingsRequest(UpdateApplicationSettingsRequestBodyWriteApplicationSettingsRequest writeApplicationSettingsRequest) {
        this.writeApplicationSettingsRequest = writeApplicationSettingsRequest;
        return this;
    }
}
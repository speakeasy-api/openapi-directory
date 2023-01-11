package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateVoiceTemplateRequestBody {
    @JsonProperty("VoiceTemplateRequest")
    public UpdateVoiceTemplateRequestBodyVoiceTemplateRequest voiceTemplateRequest;
    public UpdateVoiceTemplateRequestBody withVoiceTemplateRequest(UpdateVoiceTemplateRequestBodyVoiceTemplateRequest voiceTemplateRequest) {
        this.voiceTemplateRequest = voiceTemplateRequest;
        return this;
    }
}
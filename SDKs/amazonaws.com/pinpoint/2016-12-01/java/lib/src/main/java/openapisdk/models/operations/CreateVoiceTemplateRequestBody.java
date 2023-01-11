package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateVoiceTemplateRequestBody {
    @JsonProperty("VoiceTemplateRequest")
    public CreateVoiceTemplateRequestBodyVoiceTemplateRequest voiceTemplateRequest;
    public CreateVoiceTemplateRequestBody withVoiceTemplateRequest(CreateVoiceTemplateRequestBodyVoiceTemplateRequest voiceTemplateRequest) {
        this.voiceTemplateRequest = voiceTemplateRequest;
        return this;
    }
}
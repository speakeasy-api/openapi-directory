package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetVoiceTemplateResponse {
    @JsonProperty("VoiceTemplateResponse")
    public VoiceTemplateResponse voiceTemplateResponse;
    public GetVoiceTemplateResponse withVoiceTemplateResponse(VoiceTemplateResponse voiceTemplateResponse) {
        this.voiceTemplateResponse = voiceTemplateResponse;
        return this;
    }
}
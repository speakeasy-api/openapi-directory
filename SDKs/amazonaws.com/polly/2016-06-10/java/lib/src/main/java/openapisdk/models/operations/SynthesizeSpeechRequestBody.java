package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SynthesizeSpeechRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Engine")
    public SynthesizeSpeechRequestBodyEngineEnum engine;
    public SynthesizeSpeechRequestBody withEngine(SynthesizeSpeechRequestBodyEngineEnum engine) {
        this.engine = engine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LanguageCode")
    public SynthesizeSpeechRequestBodyLanguageCodeEnum languageCode;
    public SynthesizeSpeechRequestBody withLanguageCode(SynthesizeSpeechRequestBodyLanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LexiconNames")
    public String[] lexiconNames;
    public SynthesizeSpeechRequestBody withLexiconNames(String[] lexiconNames) {
        this.lexiconNames = lexiconNames;
        return this;
    }
    @JsonProperty("OutputFormat")
    public SynthesizeSpeechRequestBodyOutputFormatEnum outputFormat;
    public SynthesizeSpeechRequestBody withOutputFormat(SynthesizeSpeechRequestBodyOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SampleRate")
    public String sampleRate;
    public SynthesizeSpeechRequestBody withSampleRate(String sampleRate) {
        this.sampleRate = sampleRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SpeechMarkTypes")
    public openapisdk.models.shared.SpeechMarkTypeEnum[] speechMarkTypes;
    public SynthesizeSpeechRequestBody withSpeechMarkTypes(openapisdk.models.shared.SpeechMarkTypeEnum[] speechMarkTypes) {
        this.speechMarkTypes = speechMarkTypes;
        return this;
    }
    @JsonProperty("Text")
    public String text;
    public SynthesizeSpeechRequestBody withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TextType")
    public SynthesizeSpeechRequestBodyTextTypeEnum textType;
    public SynthesizeSpeechRequestBody withTextType(SynthesizeSpeechRequestBodyTextTypeEnum textType) {
        this.textType = textType;
        return this;
    }
    @JsonProperty("VoiceId")
    public SynthesizeSpeechRequestBodyVoiceIdEnum voiceId;
    public SynthesizeSpeechRequestBody withVoiceId(SynthesizeSpeechRequestBodyVoiceIdEnum voiceId) {
        this.voiceId = voiceId;
        return this;
    }
}
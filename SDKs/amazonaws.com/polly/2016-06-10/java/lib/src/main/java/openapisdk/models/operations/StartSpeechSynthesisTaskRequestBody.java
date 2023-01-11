package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartSpeechSynthesisTaskRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Engine")
    public StartSpeechSynthesisTaskRequestBodyEngineEnum engine;
    public StartSpeechSynthesisTaskRequestBody withEngine(StartSpeechSynthesisTaskRequestBodyEngineEnum engine) {
        this.engine = engine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LanguageCode")
    public StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum languageCode;
    public StartSpeechSynthesisTaskRequestBody withLanguageCode(StartSpeechSynthesisTaskRequestBodyLanguageCodeEnum languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LexiconNames")
    public String[] lexiconNames;
    public StartSpeechSynthesisTaskRequestBody withLexiconNames(String[] lexiconNames) {
        this.lexiconNames = lexiconNames;
        return this;
    }
    @JsonProperty("OutputFormat")
    public StartSpeechSynthesisTaskRequestBodyOutputFormatEnum outputFormat;
    public StartSpeechSynthesisTaskRequestBody withOutputFormat(StartSpeechSynthesisTaskRequestBodyOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
    @JsonProperty("OutputS3BucketName")
    public String outputS3BucketName;
    public StartSpeechSynthesisTaskRequestBody withOutputS3BucketName(String outputS3BucketName) {
        this.outputS3BucketName = outputS3BucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputS3KeyPrefix")
    public String outputS3KeyPrefix;
    public StartSpeechSynthesisTaskRequestBody withOutputS3KeyPrefix(String outputS3KeyPrefix) {
        this.outputS3KeyPrefix = outputS3KeyPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SampleRate")
    public String sampleRate;
    public StartSpeechSynthesisTaskRequestBody withSampleRate(String sampleRate) {
        this.sampleRate = sampleRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnsTopicArn")
    public String snsTopicArn;
    public StartSpeechSynthesisTaskRequestBody withSnsTopicArn(String snsTopicArn) {
        this.snsTopicArn = snsTopicArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SpeechMarkTypes")
    public openapisdk.models.shared.SpeechMarkTypeEnum[] speechMarkTypes;
    public StartSpeechSynthesisTaskRequestBody withSpeechMarkTypes(openapisdk.models.shared.SpeechMarkTypeEnum[] speechMarkTypes) {
        this.speechMarkTypes = speechMarkTypes;
        return this;
    }
    @JsonProperty("Text")
    public String text;
    public StartSpeechSynthesisTaskRequestBody withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TextType")
    public StartSpeechSynthesisTaskRequestBodyTextTypeEnum textType;
    public StartSpeechSynthesisTaskRequestBody withTextType(StartSpeechSynthesisTaskRequestBodyTextTypeEnum textType) {
        this.textType = textType;
        return this;
    }
    @JsonProperty("VoiceId")
    public StartSpeechSynthesisTaskRequestBodyVoiceIdEnum voiceId;
    public StartSpeechSynthesisTaskRequestBody withVoiceId(StartSpeechSynthesisTaskRequestBodyVoiceIdEnum voiceId) {
        this.voiceId = voiceId;
        return this;
    }
}
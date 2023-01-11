package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePresetRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Audio")
    public CreatePresetRequestBodyAudio audio;
    public CreatePresetRequestBody withAudio(CreatePresetRequestBodyAudio audio) {
        this.audio = audio;
        return this;
    }
    @JsonProperty("Container")
    public String container;
    public CreatePresetRequestBody withContainer(String container) {
        this.container = container;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreatePresetRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreatePresetRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Thumbnails")
    public CreatePresetRequestBodyThumbnails thumbnails;
    public CreatePresetRequestBody withThumbnails(CreatePresetRequestBodyThumbnails thumbnails) {
        this.thumbnails = thumbnails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Video")
    public CreatePresetRequestBodyVideo video;
    public CreatePresetRequestBody withVideo(CreatePresetRequestBodyVideo video) {
        this.video = video;
        return this;
    }
}
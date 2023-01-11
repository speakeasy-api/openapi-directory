package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectProtectiveEquipmentRequest {
    @JsonProperty("Image")
    public Image image;
    public DetectProtectiveEquipmentRequest withImage(Image image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SummarizationAttributes")
    public ProtectiveEquipmentSummarizationAttributes summarizationAttributes;
    public DetectProtectiveEquipmentRequest withSummarizationAttributes(ProtectiveEquipmentSummarizationAttributes summarizationAttributes) {
        this.summarizationAttributes = summarizationAttributes;
        return this;
    }
}
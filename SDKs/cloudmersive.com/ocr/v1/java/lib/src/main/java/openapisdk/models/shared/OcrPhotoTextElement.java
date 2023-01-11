package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OcrPhotoTextElement
 * A single text in an OCR document
**/
public class OcrPhotoTextElement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BoundingPoints")
    public Point[] boundingPoints;
    public OcrPhotoTextElement withBoundingPoints(Point[] boundingPoints) {
        this.boundingPoints = boundingPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfidenceLevel")
    public Double confidenceLevel;
    public OcrPhotoTextElement withConfidenceLevel(Double confidenceLevel) {
        this.confidenceLevel = confidenceLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Height")
    public Integer height;
    public OcrPhotoTextElement withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Text")
    public String text;
    public OcrPhotoTextElement withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Width")
    public Integer width;
    public OcrPhotoTextElement withWidth(Integer width) {
        this.width = width;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("XLeft")
    public Integer xLeft;
    public OcrPhotoTextElement withXLeft(Integer xLeft) {
        this.xLeft = xLeft;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("YTop")
    public Integer yTop;
    public OcrPhotoTextElement withYTop(Integer yTop) {
        this.yTop = yTop;
        return this;
    }
}
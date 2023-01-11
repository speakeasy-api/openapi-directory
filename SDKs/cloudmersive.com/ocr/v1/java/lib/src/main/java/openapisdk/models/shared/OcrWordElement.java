package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OcrWordElement
 * A single word in an OCR document
**/
public class OcrWordElement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BlockNumber")
    public Integer blockNumber;
    public OcrWordElement withBlockNumber(Integer blockNumber) {
        this.blockNumber = blockNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfidenceLevel")
    public Double confidenceLevel;
    public OcrWordElement withConfidenceLevel(Double confidenceLevel) {
        this.confidenceLevel = confidenceLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Height")
    public Integer height;
    public OcrWordElement withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LineNumber")
    public Integer lineNumber;
    public OcrWordElement withLineNumber(Integer lineNumber) {
        this.lineNumber = lineNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageNumber")
    public Integer pageNumber;
    public OcrWordElement withPageNumber(Integer pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParagraphNumber")
    public Integer paragraphNumber;
    public OcrWordElement withParagraphNumber(Integer paragraphNumber) {
        this.paragraphNumber = paragraphNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Width")
    public Integer width;
    public OcrWordElement withWidth(Integer width) {
        this.width = width;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WordNumber")
    public Integer wordNumber;
    public OcrWordElement withWordNumber(Integer wordNumber) {
        this.wordNumber = wordNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WordText")
    public String wordText;
    public OcrWordElement withWordText(String wordText) {
        this.wordText = wordText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("XLeft")
    public Integer xLeft;
    public OcrWordElement withXLeft(Integer xLeft) {
        this.xLeft = xLeft;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("YTop")
    public Integer yTop;
    public OcrWordElement withYTop(Integer yTop) {
        this.yTop = yTop;
        return this;
    }
}
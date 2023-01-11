package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OcrLineElement
 * A contiguous line of text in an OCR document
**/
public class OcrLineElement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LineText")
    public String lineText;
    public OcrLineElement withLineText(String lineText) {
        this.lineText = lineText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Words")
    public OcrWordElement[] words;
    public OcrLineElement withWords(OcrWordElement[] words) {
        this.words = words;
        return this;
    }
}
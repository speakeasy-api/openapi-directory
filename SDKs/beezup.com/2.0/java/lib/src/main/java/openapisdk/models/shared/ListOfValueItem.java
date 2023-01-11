package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListOfValueItem
 * This object is used by LOV apis
**/
public class ListOfValueItem {
    @JsonProperty("codeIdentifier")
    public String codeIdentifier;
    public ListOfValueItem withCodeIdentifier(String codeIdentifier) {
        this.codeIdentifier = codeIdentifier;
        return this;
    }
    @JsonProperty("intIdentifier")
    public Integer intIdentifier;
    public ListOfValueItem withIntIdentifier(Integer intIdentifier) {
        this.intIdentifier = intIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public Integer position;
    public ListOfValueItem withPosition(Integer position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("translationText")
    public String translationText;
    public ListOfValueItem withTranslationText(String translationText) {
        this.translationText = translationText;
        return this;
    }
}
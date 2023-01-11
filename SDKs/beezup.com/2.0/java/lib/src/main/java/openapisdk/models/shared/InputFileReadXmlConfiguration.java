package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InputFileReadXmlConfiguration
 * The XML file description
**/
public class InputFileReadXmlConfiguration {
    @JsonProperty("flattenXmlChildElements")
    public Boolean flattenXmlChildElements;
    public InputFileReadXmlConfiguration withFlattenXmlChildElements(Boolean flattenXmlChildElements) {
        this.flattenXmlChildElements = flattenXmlChildElements;
        return this;
    }
    @JsonProperty("useXmlAttributes")
    public Boolean useXmlAttributes;
    public InputFileReadXmlConfiguration withUseXmlAttributes(Boolean useXmlAttributes) {
        this.useXmlAttributes = useXmlAttributes;
        return this;
    }
}
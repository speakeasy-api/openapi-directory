package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputFileReadConfiguration
 * Describe how to read the file. If FileFormatStrategy is CSV, csvFileReadProperties is required. Otherwise the xmlFileReadProperties is required.
 * 
**/
public class InputFileReadConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("csvFileReadProperties")
    public InputFileReadCsvConfiguration csvFileReadProperties;
    public InputFileReadConfiguration withCsvFileReadProperties(InputFileReadCsvConfiguration csvFileReadProperties) {
        this.csvFileReadProperties = csvFileReadProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cultureName")
    public String cultureName;
    public InputFileReadConfiguration withCultureName(String cultureName) {
        this.cultureName = cultureName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encodingTypeName")
    public String encodingTypeName;
    public InputFileReadConfiguration withEncodingTypeName(String encodingTypeName) {
        this.encodingTypeName = encodingTypeName;
        return this;
    }
    @JsonProperty("format")
    public FileFormatStrategyEnum format;
    public InputFileReadConfiguration withFormat(FileFormatStrategyEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xmlFileReadProperties")
    public InputFileReadXmlConfiguration xmlFileReadProperties;
    public InputFileReadConfiguration withXmlFileReadProperties(InputFileReadXmlConfiguration xmlFileReadProperties) {
        this.xmlFileReadProperties = xmlFileReadProperties;
        return this;
    }
}
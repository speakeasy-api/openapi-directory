package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InfoSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("informationArguments")
    public java.util.Map<String, String> informationArguments;
    public InfoSummary withInformationArguments(java.util.Map<String, String> informationArguments) {
        this.informationArguments = informationArguments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("informationCode")
    public String informationCode;
    public InfoSummary withInformationCode(String informationCode) {
        this.informationCode = informationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("informationMessage")
    public String informationMessage;
    public InfoSummary withInformationMessage(String informationMessage) {
        this.informationMessage = informationMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public InfoSummary withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propertyName")
    public String propertyName;
    public InfoSummary withPropertyName(String propertyName) {
        this.propertyName = propertyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propertyValue")
    public String propertyValue;
    public InfoSummary withPropertyValue(String propertyValue) {
        this.propertyValue = propertyValue;
        return this;
    }
}
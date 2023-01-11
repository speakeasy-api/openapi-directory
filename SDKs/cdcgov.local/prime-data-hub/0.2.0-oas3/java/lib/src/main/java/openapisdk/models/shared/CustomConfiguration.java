package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomConfiguration
 * A custom configuration for a custom schema
**/
public class CustomConfiguration {
    @JsonProperty("format")
    public CustomConfigurationFormatEnum format;
    public CustomConfiguration withFormat(CustomConfigurationFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nameFormat")
    public String nameFormat;
    public CustomConfiguration withNameFormat(String nameFormat) {
        this.nameFormat = nameFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receivingOrganization")
    public String receivingOrganization;
    public CustomConfiguration withReceivingOrganization(String receivingOrganization) {
        this.receivingOrganization = receivingOrganization;
        return this;
    }
    @JsonProperty("schemaName")
    public String schemaName;
    public CustomConfiguration withSchemaName(String schemaName) {
        this.schemaName = schemaName;
        return this;
    }
    @JsonProperty("transport")
    public Object transport;
    public CustomConfiguration withTransport(Object transport) {
        this.transport = transport;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public CustomConfiguration withType(String type) {
        this.type = type;
        return this;
    }
}
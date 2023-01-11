package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StandardHl7Configuration
 * A standard HL7 configuration
**/
public class StandardHl7Configuration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("convertTimestampToDateTime")
    public String convertTimestampToDateTime;
    public StandardHl7Configuration withConvertTimestampToDateTime(String convertTimestampToDateTime) {
        this.convertTimestampToDateTime = convertTimestampToDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultAoeToUnknown")
    public Boolean defaultAoeToUnknown;
    public StandardHl7Configuration withDefaultAoeToUnknown(Boolean defaultAoeToUnknown) {
        this.defaultAoeToUnknown = defaultAoeToUnknown;
        return this;
    }
    @JsonProperty("includeAOE")
    public Boolean includeAOE;
    public StandardHl7Configuration withIncludeAoe(Boolean includeAOE) {
        this.includeAOE = includeAOE;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nameFormat")
    public String nameFormat;
    public StandardHl7Configuration withNameFormat(String nameFormat) {
        this.nameFormat = nameFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumberFormatting")
    public StandardHl7ConfigurationPhoneNumberFormattingEnum phoneNumberFormatting;
    public StandardHl7Configuration withPhoneNumberFormatting(StandardHl7ConfigurationPhoneNumberFormattingEnum phoneNumberFormatting) {
        this.phoneNumberFormatting = phoneNumberFormatting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receivingApplicationName")
    public String receivingApplicationName;
    public StandardHl7Configuration withReceivingApplicationName(String receivingApplicationName) {
        this.receivingApplicationName = receivingApplicationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receivingApplicationOID")
    public String receivingApplicationOID;
    public StandardHl7Configuration withReceivingApplicationOid(String receivingApplicationOID) {
        this.receivingApplicationOID = receivingApplicationOID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receivingFacilityName")
    public String receivingFacilityName;
    public StandardHl7Configuration withReceivingFacilityName(String receivingFacilityName) {
        this.receivingFacilityName = receivingFacilityName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receivingFacilityOID")
    public String receivingFacilityOID;
    public StandardHl7Configuration withReceivingFacilityOid(String receivingFacilityOID) {
        this.receivingFacilityOID = receivingFacilityOID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receivingOrganization")
    public String receivingOrganization;
    public StandardHl7Configuration withReceivingOrganization(String receivingOrganization) {
        this.receivingOrganization = receivingOrganization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportingFacilityId")
    public String reportingFacilityId;
    public StandardHl7Configuration withReportingFacilityId(String reportingFacilityId) {
        this.reportingFacilityId = reportingFacilityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportingFacilityIdType")
    public String reportingFacilityIdType;
    public StandardHl7Configuration withReportingFacilityIdType(String reportingFacilityIdType) {
        this.reportingFacilityIdType = reportingFacilityIdType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportingFacilityName")
    public String reportingFacilityName;
    public StandardHl7Configuration withReportingFacilityName(String reportingFacilityName) {
        this.reportingFacilityName = reportingFacilityName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suppressAoe")
    public Boolean suppressAoe;
    public StandardHl7Configuration withSuppressAoe(Boolean suppressAoe) {
        this.suppressAoe = suppressAoe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suppressHl7Fields")
    public String suppressHl7Fields;
    public StandardHl7Configuration withSuppressHl7Fields(String suppressHl7Fields) {
        this.suppressHl7Fields = suppressHl7Fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suppressQstForAoe")
    public Boolean suppressQstForAoe;
    public StandardHl7Configuration withSuppressQstForAoe(Boolean suppressQstForAoe) {
        this.suppressQstForAoe = suppressQstForAoe;
        return this;
    }
    @JsonProperty("transport")
    public Object transport;
    public StandardHl7Configuration withTransport(Object transport) {
        this.transport = transport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("truncateHDNamespaceIds")
    public Boolean truncateHDNamespaceIds;
    public StandardHl7Configuration withTruncateHdNamespaceIds(Boolean truncateHDNamespaceIds) {
        this.truncateHDNamespaceIds = truncateHDNamespaceIds;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public StandardHl7Configuration withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("useBatchHeaders")
    public Boolean useBatchHeaders;
    public StandardHl7Configuration withUseBatchHeaders(Boolean useBatchHeaders) {
        this.useBatchHeaders = useBatchHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useBlankInsteadOfUnknown")
    public String useBlankInsteadOfUnknown;
    public StandardHl7Configuration withUseBlankInsteadOfUnknown(String useBlankInsteadOfUnknown) {
        this.useBlankInsteadOfUnknown = useBlankInsteadOfUnknown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usePid14ForPatientEmail")
    public Boolean usePid14ForPatientEmail;
    public StandardHl7Configuration withUsePid14ForPatientEmail(Boolean usePid14ForPatientEmail) {
        this.usePid14ForPatientEmail = usePid14ForPatientEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useTestProcessingMode")
    public Boolean useTestProcessingMode;
    public StandardHl7Configuration withUseTestProcessingMode(Boolean useTestProcessingMode) {
        this.useTestProcessingMode = useTestProcessingMode;
        return this;
    }
}
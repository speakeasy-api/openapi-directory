package shared

type StandardHl7ConfigurationPhoneNumberFormattingEnum string

const (
	StandardHl7ConfigurationPhoneNumberFormattingEnumStandard                 StandardHl7ConfigurationPhoneNumberFormattingEnum = "STANDARD"
	StandardHl7ConfigurationPhoneNumberFormattingEnumOnlyDigitsInComponentOne StandardHl7ConfigurationPhoneNumberFormattingEnum = "ONLY_DIGITS_IN_COMPONENT_ONE"
	StandardHl7ConfigurationPhoneNumberFormattingEnumAreaLocalInComponentOne  StandardHl7ConfigurationPhoneNumberFormattingEnum = "AREA_LOCAL_IN_COMPONENT_ONE"
)

// StandardHl7Configuration
// A standard HL7 configuration
type StandardHl7Configuration struct {
	ConvertTimestampToDateTime *string                                            `json:"convertTimestampToDateTime,omitempty"`
	DefaultAoeToUnknown        *bool                                              `json:"defaultAoeToUnknown,omitempty"`
	IncludeAOE                 bool                                               `json:"includeAOE"`
	NameFormat                 *string                                            `json:"nameFormat,omitempty"`
	PhoneNumberFormatting      *StandardHl7ConfigurationPhoneNumberFormattingEnum `json:"phoneNumberFormatting,omitempty"`
	ReceivingApplicationName   *string                                            `json:"receivingApplicationName,omitempty"`
	ReceivingApplicationOID    *string                                            `json:"receivingApplicationOID,omitempty"`
	ReceivingFacilityName      *string                                            `json:"receivingFacilityName,omitempty"`
	ReceivingFacilityOID       *string                                            `json:"receivingFacilityOID,omitempty"`
	ReceivingOrganization      *string                                            `json:"receivingOrganization,omitempty"`
	ReportingFacilityID        *string                                            `json:"reportingFacilityId,omitempty"`
	ReportingFacilityIDType    *string                                            `json:"reportingFacilityIdType,omitempty"`
	ReportingFacilityName      *string                                            `json:"reportingFacilityName,omitempty"`
	SuppressAoe                *bool                                              `json:"suppressAoe,omitempty"`
	SuppressHl7Fields          *string                                            `json:"suppressHl7Fields,omitempty"`
	SuppressQstForAoe          *bool                                              `json:"suppressQstForAoe,omitempty"`
	Transport                  interface{}                                        `json:"transport"`
	TruncateHDNamespaceIds     *bool                                              `json:"truncateHDNamespaceIds,omitempty"`
	Type                       string                                             `json:"type"`
	UseBatchHeaders            bool                                               `json:"useBatchHeaders"`
	UseBlankInsteadOfUnknown   *string                                            `json:"useBlankInsteadOfUnknown,omitempty"`
	UsePid14ForPatientEmail    *bool                                              `json:"usePid14ForPatientEmail,omitempty"`
	UseTestProcessingMode      *bool                                              `json:"useTestProcessingMode,omitempty"`
}

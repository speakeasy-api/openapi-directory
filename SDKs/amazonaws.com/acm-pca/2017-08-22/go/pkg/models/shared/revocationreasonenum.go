package shared

type RevocationReasonEnum string

const (
	RevocationReasonEnumUnspecified                    RevocationReasonEnum = "UNSPECIFIED"
	RevocationReasonEnumKeyCompromise                  RevocationReasonEnum = "KEY_COMPROMISE"
	RevocationReasonEnumCertificateAuthorityCompromise RevocationReasonEnum = "CERTIFICATE_AUTHORITY_COMPROMISE"
	RevocationReasonEnumAffiliationChanged             RevocationReasonEnum = "AFFILIATION_CHANGED"
	RevocationReasonEnumSuperseded                     RevocationReasonEnum = "SUPERSEDED"
	RevocationReasonEnumCessationOfOperation           RevocationReasonEnum = "CESSATION_OF_OPERATION"
	RevocationReasonEnumPrivilegeWithdrawn             RevocationReasonEnum = "PRIVILEGE_WITHDRAWN"
	RevocationReasonEnumAACompromise                   RevocationReasonEnum = "A_A_COMPROMISE"
)

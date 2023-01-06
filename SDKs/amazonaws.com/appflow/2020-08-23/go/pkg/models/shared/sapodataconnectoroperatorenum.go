package shared

type SapoDataConnectorOperatorEnum string

const (
	SAPODataConnectorOperatorEnumProjection           SapoDataConnectorOperatorEnum = "PROJECTION"
	SAPODataConnectorOperatorEnumLessThan             SapoDataConnectorOperatorEnum = "LESS_THAN"
	SAPODataConnectorOperatorEnumContains             SapoDataConnectorOperatorEnum = "CONTAINS"
	SAPODataConnectorOperatorEnumGreaterThan          SapoDataConnectorOperatorEnum = "GREATER_THAN"
	SAPODataConnectorOperatorEnumBetween              SapoDataConnectorOperatorEnum = "BETWEEN"
	SAPODataConnectorOperatorEnumLessThanOrEqualTo    SapoDataConnectorOperatorEnum = "LESS_THAN_OR_EQUAL_TO"
	SAPODataConnectorOperatorEnumGreaterThanOrEqualTo SapoDataConnectorOperatorEnum = "GREATER_THAN_OR_EQUAL_TO"
	SAPODataConnectorOperatorEnumEqualTo              SapoDataConnectorOperatorEnum = "EQUAL_TO"
	SAPODataConnectorOperatorEnumNotEqualTo           SapoDataConnectorOperatorEnum = "NOT_EQUAL_TO"
	SAPODataConnectorOperatorEnumAddition             SapoDataConnectorOperatorEnum = "ADDITION"
	SAPODataConnectorOperatorEnumMultiplication       SapoDataConnectorOperatorEnum = "MULTIPLICATION"
	SAPODataConnectorOperatorEnumDivision             SapoDataConnectorOperatorEnum = "DIVISION"
	SAPODataConnectorOperatorEnumSubtraction          SapoDataConnectorOperatorEnum = "SUBTRACTION"
	SAPODataConnectorOperatorEnumMaskAll              SapoDataConnectorOperatorEnum = "MASK_ALL"
	SAPODataConnectorOperatorEnumMaskFirstN           SapoDataConnectorOperatorEnum = "MASK_FIRST_N"
	SAPODataConnectorOperatorEnumMaskLastN            SapoDataConnectorOperatorEnum = "MASK_LAST_N"
	SAPODataConnectorOperatorEnumValidateNonNull      SapoDataConnectorOperatorEnum = "VALIDATE_NON_NULL"
	SAPODataConnectorOperatorEnumValidateNonZero      SapoDataConnectorOperatorEnum = "VALIDATE_NON_ZERO"
	SAPODataConnectorOperatorEnumValidateNonNegative  SapoDataConnectorOperatorEnum = "VALIDATE_NON_NEGATIVE"
	SAPODataConnectorOperatorEnumValidateNumeric      SapoDataConnectorOperatorEnum = "VALIDATE_NUMERIC"
	SAPODataConnectorOperatorEnumNoOp                 SapoDataConnectorOperatorEnum = "NO_OP"
)

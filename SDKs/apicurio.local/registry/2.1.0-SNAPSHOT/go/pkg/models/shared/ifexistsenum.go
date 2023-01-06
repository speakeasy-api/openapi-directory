package shared

type IfExistsEnum string

const (
	IfExistsEnumFail           IfExistsEnum = "FAIL"
	IfExistsEnumUpdate         IfExistsEnum = "UPDATE"
	IfExistsEnumReturn         IfExistsEnum = "RETURN"
	IfExistsEnumReturnOrUpdate IfExistsEnum = "RETURN_OR_UPDATE"
)

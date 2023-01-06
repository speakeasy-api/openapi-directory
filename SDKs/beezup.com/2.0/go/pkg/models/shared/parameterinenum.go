package shared

type ParameterInEnum string

const (
	ParameterInEnumPath   ParameterInEnum = "path"
	ParameterInEnumHeader ParameterInEnum = "header"
	ParameterInEnumQuery  ParameterInEnum = "query"
	ParameterInEnumBody   ParameterInEnum = "body"
	ParameterInEnumFile   ParameterInEnum = "file"
)

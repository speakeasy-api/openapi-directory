package shared

type MlModelTypeEnum string

const (
	MLModelTypeEnumRegression MlModelTypeEnum = "REGRESSION"
	MLModelTypeEnumBinary     MlModelTypeEnum = "BINARY"
	MLModelTypeEnumMulticlass MlModelTypeEnum = "MULTICLASS"
)

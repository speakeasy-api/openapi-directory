package shared

type ReportTypeEnum string

const (
	ReportTypeEnumByChannel  ReportTypeEnum = "ByChannel"
	ReportTypeEnumByCategory ReportTypeEnum = "ByCategory"
	ReportTypeEnumByProduct  ReportTypeEnum = "ByProduct"
	ReportTypeEnumByDay      ReportTypeEnum = "ByDay"
)

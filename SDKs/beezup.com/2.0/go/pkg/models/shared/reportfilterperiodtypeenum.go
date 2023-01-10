package shared

type ReportFilterPeriodTypeEnum string

const (
	ReportFilterPeriodTypeEnumCustom      ReportFilterPeriodTypeEnum = "Custom"
	ReportFilterPeriodTypeEnumYesterday   ReportFilterPeriodTypeEnum = "Yesterday"
	ReportFilterPeriodTypeEnumLast7Days   ReportFilterPeriodTypeEnum = "Last7Days"
	ReportFilterPeriodTypeEnumLastWeek    ReportFilterPeriodTypeEnum = "LastWeek"
	ReportFilterPeriodTypeEnumThisMonth   ReportFilterPeriodTypeEnum = "ThisMonth"
	ReportFilterPeriodTypeEnumLast30Days  ReportFilterPeriodTypeEnum = "Last30Days"
	ReportFilterPeriodTypeEnumLastMonth   ReportFilterPeriodTypeEnum = "LastMonth"
	ReportFilterPeriodTypeEnumLast60Days  ReportFilterPeriodTypeEnum = "Last60Days"
	ReportFilterPeriodTypeEnumLast90Days  ReportFilterPeriodTypeEnum = "Last90Days"
	ReportFilterPeriodTypeEnumLast3Months ReportFilterPeriodTypeEnum = "Last3Months"
)

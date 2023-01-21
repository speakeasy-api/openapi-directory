package shared

type GranularityEnum string

const (
	GranularityEnumDaily   GranularityEnum = "DAILY"
	GranularityEnumMonthly GranularityEnum = "MONTHLY"
	GranularityEnumHourly  GranularityEnum = "HOURLY"
)

package shared

type DataSourceTypeEnum string

const (
	DataSourceTypeEnumS3          DataSourceTypeEnum = "S3"
	DataSourceTypeEnumSharepoint  DataSourceTypeEnum = "SHAREPOINT"
	DataSourceTypeEnumDatabase    DataSourceTypeEnum = "DATABASE"
	DataSourceTypeEnumSalesforce  DataSourceTypeEnum = "SALESFORCE"
	DataSourceTypeEnumOnedrive    DataSourceTypeEnum = "ONEDRIVE"
	DataSourceTypeEnumServicenow  DataSourceTypeEnum = "SERVICENOW"
	DataSourceTypeEnumCustom      DataSourceTypeEnum = "CUSTOM"
	DataSourceTypeEnumConfluence  DataSourceTypeEnum = "CONFLUENCE"
	DataSourceTypeEnumGoogledrive DataSourceTypeEnum = "GOOGLEDRIVE"
	DataSourceTypeEnumWebcrawler  DataSourceTypeEnum = "WEBCRAWLER"
	DataSourceTypeEnumWorkdocs    DataSourceTypeEnum = "WORKDOCS"
)

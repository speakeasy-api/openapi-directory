package shared

type DownloadCatalogStrategyEnum string

const (
	DownloadCatalogStrategyEnumSimpleURI  DownloadCatalogStrategyEnum = "SimpleUri"
	DownloadCatalogStrategyEnumFtpLatest  DownloadCatalogStrategyEnum = "FtpLatest"
	DownloadCatalogStrategyEnumSftp       DownloadCatalogStrategyEnum = "Sftp"
	DownloadCatalogStrategyEnumSftpLatest DownloadCatalogStrategyEnum = "SftpLatest"
	DownloadCatalogStrategyEnumFtps       DownloadCatalogStrategyEnum = "Ftps"
	DownloadCatalogStrategyEnumFtpsLatest DownloadCatalogStrategyEnum = "FtpsLatest"
	DownloadCatalogStrategyEnumLocal      DownloadCatalogStrategyEnum = "Local"
)

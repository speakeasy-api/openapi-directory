import dataclasses
from enum import Enum

class DownloadCatalogStrategyEnum(str, Enum):
    SIMPLE_URI = "SimpleUri"
    FTP_LATEST = "FtpLatest"
    SFTP = "Sftp"
    SFTP_LATEST = "SftpLatest"
    FTPS = "Ftps"
    FTPS_LATEST = "FtpsLatest"
    LOCAL = "Local"


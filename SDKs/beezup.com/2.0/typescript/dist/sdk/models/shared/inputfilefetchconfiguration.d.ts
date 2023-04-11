import { SpeakeasyBase } from "../../../internal/utils";
import { CompressionFormatStrategyEnum } from "./compressionformatstrategyenum";
import { Credential } from "./credential";
import { DownloadCatalogStrategyEnum } from "./downloadcatalogstrategyenum";
/**
 * Describe the way to download the file
 */
export declare class InputFileFetchConfiguration extends SpeakeasyBase {
    /**
     * Indicate the relative path in the compressed file
     */
    compressedRelativePath?: string;
    /**
     * Indicate the compression type
     */
    compressionFormatStrategy?: CompressionFormatStrategyEnum;
    /**
     * Provides the credentials
     */
    credential?: Credential;
    /**
     * Indicate the download strategy (simple uri, ftps, ftplatest file, etc...)
     */
    downloadCatalogStrategy: DownloadCatalogStrategyEnum;
    /**
     * Indicate the download time out in second
     */
    downloadTimeout?: number;
    /**
     * Indicate the Uri of the file. (http, https, ftp, ftps, sftp are allowed)
     */
    uri: string;
}

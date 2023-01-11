import { SpeakeasyBase } from "../../../internal/utils";
import { CompressionFormatStrategyEnum } from "./compressionformatstrategyenum";
import { Credential } from "./credential";
import { DownloadCatalogStrategyEnum } from "./downloadcatalogstrategyenum";
/**
 * Describe the way to download the file
**/
export declare class InputFileFetchConfiguration extends SpeakeasyBase {
    compressedRelativePath?: string;
    compressionFormatStrategy?: CompressionFormatStrategyEnum;
    credential?: Credential;
    downloadCatalogStrategy: DownloadCatalogStrategyEnum;
    downloadTimeout?: number;
    uri: string;
}

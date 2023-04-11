import { SpeakeasyBase } from "../../../internal/utils";
import { ImportStatusEnum } from "./importstatusenum";
import { InputCompressionTypeEnum } from "./inputcompressiontypeenum";
import { InputFormatEnum } from "./inputformatenum";
import { InputFormatOptions } from "./inputformatoptions";
import { S3BucketSource } from "./s3bucketsource";
import { TableCreationParameters } from "./tablecreationparameters";
/**
 *  Represents the properties of the table being imported into.
 */
export declare class ImportTableDescription extends SpeakeasyBase {
    clientToken?: string;
    cloudWatchLogGroupArn?: string;
    endTime?: Date;
    errorCount?: number;
    failureCode?: string;
    failureMessage?: string;
    importArn?: string;
    importStatus?: ImportStatusEnum;
    importedItemCount?: number;
    inputCompressionType?: InputCompressionTypeEnum;
    inputFormat?: InputFormatEnum;
    inputFormatOptions?: InputFormatOptions;
    processedItemCount?: number;
    processedSizeBytes?: number;
    s3BucketSource?: S3BucketSource;
    startTime?: Date;
    tableArn?: string;
    tableCreationParameters?: TableCreationParameters;
    tableId?: string;
}

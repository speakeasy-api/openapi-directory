import { SpeakeasyBase } from "../../../internal/utils";
import { InputCompressionTypeEnum } from "./inputcompressiontypeenum";
import { InputFormatEnum } from "./inputformatenum";
import { InputFormatOptions } from "./inputformatoptions";
import { S3BucketSource } from "./s3bucketsource";
import { TableCreationParameters } from "./tablecreationparameters";
export declare class ImportTableInput extends SpeakeasyBase {
    clientToken?: string;
    inputCompressionType?: InputCompressionTypeEnum;
    inputFormat: InputFormatEnum;
    inputFormatOptions?: InputFormatOptions;
    s3BucketSource: S3BucketSource;
    tableCreationParameters: TableCreationParameters;
}

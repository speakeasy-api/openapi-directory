import { SpeakeasyBase } from "../../../internal/utils";
import { FaqFileFormatEnum } from "./faqfileformatenum";
import { S3Path } from "./s3path";
import { Tag } from "./tag";
export declare class CreateFaqRequest extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    fileFormat?: FaqFileFormatEnum;
    indexId: string;
    languageCode?: string;
    name: string;
    roleArn: string;
    s3Path: S3Path;
    tags?: Tag[];
}

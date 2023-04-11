import { SpeakeasyBase } from "../../../internal/utils";
import { FaqFileFormatEnum } from "./faqfileformatenum";
import { FaqStatusEnum } from "./faqstatusenum";
import { S3Path } from "./s3path";
/**
 * Success
 */
export declare class DescribeFaqResponse extends SpeakeasyBase {
    createdAt?: Date;
    description?: string;
    errorMessage?: string;
    fileFormat?: FaqFileFormatEnum;
    id?: string;
    indexId?: string;
    languageCode?: string;
    name?: string;
    roleArn?: string;
    /**
     * Information required to find a specific file in an Amazon S3 bucket.
     */
    s3Path?: S3Path;
    status?: FaqStatusEnum;
    updatedAt?: Date;
}

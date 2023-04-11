import { SpeakeasyBase } from "../../../internal/utils";
import { DataIdentifierTypeEnum } from "./dataidentifiertypeenum";
/**
 * Provides information about a type of sensitive data that Amazon Macie found in an S3 bucket while performing automated sensitive data discovery for the bucket. The information also specifies the custom data identifier or managed data identifier that detected the data. This information is available only if automated sensitive data discovery is currently enabled for your account.
 */
export declare class Detection extends SpeakeasyBase {
    arn?: string;
    count?: number;
    id?: string;
    name?: string;
    suppressed?: boolean;
    type?: DataIdentifierTypeEnum;
}

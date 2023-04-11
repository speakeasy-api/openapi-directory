import { SpeakeasyBase } from "../../../internal/utils";
import { AccessRules } from "./accessrules";
import { BucketAccessLogConfig } from "./bucketaccesslogconfig";
export declare class UpdateBucketRequest extends SpeakeasyBase {
    accessLogConfig?: BucketAccessLogConfig;
    accessRules?: AccessRules;
    bucketName: string;
    readonlyAccessAccounts?: string[];
    versioning?: string;
}

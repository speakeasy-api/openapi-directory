import { SpeakeasyBase } from "../../../internal/utils";
import { AccessKey } from "./accesskey";
import { Operation } from "./operation";
/**
 * Success
 */
export declare class CreateBucketAccessKeyResult extends SpeakeasyBase {
    accessKey?: AccessKey;
    operations?: Operation[];
}

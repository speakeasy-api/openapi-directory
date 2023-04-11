import { SpeakeasyBase } from "../../../internal/utils";
import { Bucket } from "./bucket";
import { Operation } from "./operation";
/**
 * Success
 */
export declare class UpdateBucketResult extends SpeakeasyBase {
    bucket?: Bucket;
    operations?: Operation[];
}

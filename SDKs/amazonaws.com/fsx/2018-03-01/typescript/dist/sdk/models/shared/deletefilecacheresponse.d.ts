import { SpeakeasyBase } from "../../../internal/utils";
import { FileCacheLifecycleEnum } from "./filecachelifecycleenum";
/**
 * Success
 */
export declare class DeleteFileCacheResponse extends SpeakeasyBase {
    fileCacheId?: string;
    lifecycle?: FileCacheLifecycleEnum;
}

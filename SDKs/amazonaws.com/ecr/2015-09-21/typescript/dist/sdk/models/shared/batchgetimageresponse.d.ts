import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { ImageFailure } from "./imagefailure";
/**
 * Success
 */
export declare class BatchGetImageResponse extends SpeakeasyBase {
    failures?: ImageFailure[];
    images?: Image[];
}

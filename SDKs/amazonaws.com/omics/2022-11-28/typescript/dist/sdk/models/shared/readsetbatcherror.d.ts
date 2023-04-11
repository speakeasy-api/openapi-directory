import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An error from a batch read set operation.
 */
export declare class ReadSetBatchError extends SpeakeasyBase {
    code: string;
    id: string;
    message: string;
}

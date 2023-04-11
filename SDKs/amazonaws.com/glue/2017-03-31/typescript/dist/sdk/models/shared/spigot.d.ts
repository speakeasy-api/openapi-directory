import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a transform that writes samples of the data to an Amazon S3 bucket.
 */
export declare class Spigot extends SpeakeasyBase {
    inputs: string[];
    name: string;
    path: string;
    prob?: number;
    topk?: number;
}

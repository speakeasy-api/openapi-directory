import { SpeakeasyBase } from "../../../internal/utils";
import { ApiKey } from "./apikey";
/**
 * Success
 */
export declare class ListApiKeysResponse extends SpeakeasyBase {
    apiKeys?: ApiKey[];
    nextToken?: string;
}

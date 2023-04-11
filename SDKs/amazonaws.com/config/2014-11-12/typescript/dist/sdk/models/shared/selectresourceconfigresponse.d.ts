import { SpeakeasyBase } from "../../../internal/utils";
import { QueryInfo } from "./queryinfo";
/**
 * Success
 */
export declare class SelectResourceConfigResponse extends SpeakeasyBase {
    nextToken?: string;
    queryInfo?: QueryInfo;
    results?: string[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { TokenData } from "./tokendata";
/**
 * Success
 */
export declare class ListTokensResponse extends SpeakeasyBase {
    nextToken?: string;
    tokens?: TokenData[];
}

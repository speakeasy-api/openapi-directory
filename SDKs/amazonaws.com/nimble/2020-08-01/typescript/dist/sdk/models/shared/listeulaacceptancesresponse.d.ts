import { SpeakeasyBase } from "../../../internal/utils";
import { EulaAcceptance } from "./eulaacceptance";
/**
 * Success
 */
export declare class ListEulaAcceptancesResponse extends SpeakeasyBase {
    eulaAcceptances?: EulaAcceptance[];
    nextToken?: string;
}

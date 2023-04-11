import { SpeakeasyBase } from "../../../internal/utils";
import { WebACLSummary } from "./webaclsummary";
/**
 * Success
 */
export declare class ListWebACLsResponse extends SpeakeasyBase {
    nextMarker?: string;
    webACLs?: WebACLSummary[];
}

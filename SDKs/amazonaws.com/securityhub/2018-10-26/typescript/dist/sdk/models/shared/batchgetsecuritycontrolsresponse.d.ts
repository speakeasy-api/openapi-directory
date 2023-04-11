import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityControl } from "./securitycontrol";
import { UnprocessedSecurityControl } from "./unprocessedsecuritycontrol";
/**
 * Success
 */
export declare class BatchGetSecurityControlsResponse extends SpeakeasyBase {
    securityControls: SecurityControl[];
    unprocessedIds?: UnprocessedSecurityControl[];
}

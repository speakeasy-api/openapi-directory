import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityProfileTargetMapping } from "./securityprofiletargetmapping";
/**
 * Success
 */
export declare class ListSecurityProfilesForTargetResponse extends SpeakeasyBase {
    nextToken?: string;
    securityProfileTargetMappings?: SecurityProfileTargetMapping[];
}

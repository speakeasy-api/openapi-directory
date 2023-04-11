import { SpeakeasyBase } from "../../../internal/utils";
import { EFSAuthorizationConfigIAMEnum } from "./efsauthorizationconfigiamenum";
/**
 * The authorization configuration details for the Amazon EFS file system.
 */
export declare class EFSAuthorizationConfig extends SpeakeasyBase {
    accessPointId?: string;
    iam?: EFSAuthorizationConfigIAMEnum;
}

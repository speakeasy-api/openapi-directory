import { SpeakeasyBase } from "../../../internal/utils";
import { R53HostedZoneDeletionStateCodeEnum } from "./r53hostedzonedeletionstatecodeenum";
/**
 * Describes the deletion state of an Amazon Route 53 hosted zone for a domain that is being automatically delegated to an Amazon Lightsail DNS zone.
 */
export declare class R53HostedZoneDeletionState extends SpeakeasyBase {
    code?: R53HostedZoneDeletionStateCodeEnum;
    message?: string;
}

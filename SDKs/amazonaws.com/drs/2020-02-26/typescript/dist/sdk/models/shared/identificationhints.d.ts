import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Hints used to uniquely identify a machine.
 */
export declare class IdentificationHints extends SpeakeasyBase {
    awsInstanceID?: string;
    fqdn?: string;
    hostname?: string;
    vmWareUuid?: string;
}

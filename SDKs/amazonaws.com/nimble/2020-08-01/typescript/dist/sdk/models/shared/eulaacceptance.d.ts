import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The acceptance of a EULA, required to use Amazon-provided streaming images.
 */
export declare class EulaAcceptance extends SpeakeasyBase {
    acceptedAt?: Date;
    acceptedBy?: string;
    accepteeId?: string;
    eulaAcceptanceId?: string;
    eulaId?: string;
}

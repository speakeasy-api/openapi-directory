import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Returns properties of the host key that's specified.
 */
export declare class ListedHostKey extends SpeakeasyBase {
    arn: string;
    dateImported?: Date;
    description?: string;
    fingerprint?: string;
    hostKeyId?: string;
    type?: string;
}

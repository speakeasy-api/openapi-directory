import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * The details for a server host key.
 */
export declare class DescribedHostKey extends SpeakeasyBase {
    arn: string;
    dateImported?: Date;
    description?: string;
    hostKeyFingerprint?: string;
    hostKeyId?: string;
    tags?: Tag[];
    type?: string;
}

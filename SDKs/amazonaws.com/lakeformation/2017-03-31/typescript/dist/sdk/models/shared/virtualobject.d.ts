import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that defines an Amazon S3 object to be deleted if a transaction cancels, provided that <code>VirtualPut</code> was called before writing the object.
 */
export declare class VirtualObject extends SpeakeasyBase {
    eTag?: string;
    uri: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A custom type that specifies a <code>Region</code> and the <code>KmsKeyId</code> for a replica secret.
 */
export declare class ReplicaRegionType extends SpeakeasyBase {
    kmsKeyId?: string;
    region?: string;
}

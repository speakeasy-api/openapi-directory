import { SpeakeasyBase } from "../../../internal/utils";
export declare class Checksum extends SpeakeasyBase {
    /**
     *  Name of the algorithm used to generate the checksum,  as defined in ETSI GS NFV-SOL 004. For example, SHA-256, SHA-512.
     */
    algorithm: string;
    /**
     * 'String 1 The hexadecimal value of the checksum'
     */
    hash: string;
}

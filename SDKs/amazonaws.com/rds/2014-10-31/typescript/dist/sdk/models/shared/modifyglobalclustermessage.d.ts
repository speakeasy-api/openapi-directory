import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyGlobalClusterMessage extends SpeakeasyBase {
    allowMajorVersionUpgrade?: boolean;
    deletionProtection?: boolean;
    engineVersion?: string;
    globalClusterIdentifier?: string;
    newGlobalClusterIdentifier?: string;
}

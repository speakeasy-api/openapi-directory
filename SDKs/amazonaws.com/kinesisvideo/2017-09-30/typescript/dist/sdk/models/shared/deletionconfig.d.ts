import { SpeakeasyBase } from "../../../internal/utils";
import { LocalSizeConfig } from "./localsizeconfig";
/**
 * The configuration details required to delete the connection of the stream from the Edge Agent.
 */
export declare class DeletionConfig extends SpeakeasyBase {
    deleteAfterUpload?: boolean;
    edgeRetentionInHours?: number;
    localSizeConfig?: LocalSizeConfig;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { KmsKey } from "./kmskey";
/**
 * <p/>
 */
export declare class GetMissionProfileResponse extends SpeakeasyBase {
    contactPostPassDurationSeconds?: number;
    contactPrePassDurationSeconds?: number;
    dataflowEdges?: string[][];
    minimumViableContactDurationSeconds?: number;
    missionProfileArn?: string;
    missionProfileId?: string;
    name?: string;
    region?: string;
    streamsKmsKey?: KmsKey;
    streamsKmsRole?: string;
    tags?: Record<string, string>;
    trackingConfigArn?: string;
}

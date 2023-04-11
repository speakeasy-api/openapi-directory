import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class BacktrackDBClusterMessage extends SpeakeasyBase {
    backtrackTo: Date;
    dbClusterIdentifier: string;
    force?: boolean;
    useEarliestTimeOnPointInTimeUnavailable?: boolean;
}

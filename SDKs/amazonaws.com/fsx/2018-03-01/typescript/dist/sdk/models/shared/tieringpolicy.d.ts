import { SpeakeasyBase } from "../../../internal/utils";
import { TieringPolicyNameEnum } from "./tieringpolicynameenum";
/**
 * <p>Describes the data tiering policy for an ONTAP volume. When enabled, Amazon FSx for ONTAP's intelligent tiering automatically transitions a volume's data between the file system's primary storage and capacity pool storage based on your access patterns.</p> <p>Valid tiering policies are the following:</p> <ul> <li> <p> <code>SNAPSHOT_ONLY</code> - (Default value) moves cold snapshots to the capacity pool storage tier.</p> </li> </ul> <ul> <li> <p> <code>AUTO</code> - moves cold user data and snapshots to the capacity pool storage tier based on your access patterns.</p> </li> </ul> <ul> <li> <p> <code>ALL</code> - moves all user data blocks in both the active file system and Snapshot copies to the storage pool tier.</p> </li> </ul> <ul> <li> <p> <code>NONE</code> - keeps a volume's data in the primary storage tier, preventing it from being moved to the capacity pool tier.</p> </li> </ul>
 */
export declare class TieringPolicy extends SpeakeasyBase {
    coolingPeriod?: number;
    name?: TieringPolicyNameEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { LastSyncStatusEnum } from "./lastsyncstatusenum";
/**
 * <p>Provides details about the product's connection sync and contains the following sub-fields. </p> <ul> <li> <p> <code>LastSyncTime</code> </p> </li> <li> <p> <code>LastSyncStatus</code> </p> </li> <li> <p> <code>LastSyncStatusMessage</code> </p> </li> <li> <p> <code>LastSuccessfulSyncTime</code> </p> </li> <li> <p> <code>LastSuccessfulSyncProvisioningArtifactID</code> </p> </li> </ul>
 */
export declare class LastSync extends SpeakeasyBase {
    lastSuccessfulSyncProvisioningArtifactId?: string;
    lastSuccessfulSyncTime?: Date;
    lastSyncStatus?: LastSyncStatusEnum;
    lastSyncStatusMessage?: string;
    lastSyncTime?: Date;
}

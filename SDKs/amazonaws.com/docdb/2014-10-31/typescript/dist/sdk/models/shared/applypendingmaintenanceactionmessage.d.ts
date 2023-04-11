import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input to <a>ApplyPendingMaintenanceAction</a>.
 */
export declare class ApplyPendingMaintenanceActionMessage extends SpeakeasyBase {
    applyAction: string;
    optInType: string;
    resourceIdentifier: string;
}

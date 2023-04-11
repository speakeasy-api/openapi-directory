import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteFleetsRequest extends SpeakeasyBase {
    dryRun?: boolean;
    fleetIds: string[];
    terminateInstances: boolean;
}

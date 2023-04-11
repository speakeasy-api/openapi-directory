import { SpeakeasyBase } from "../../../internal/utils";
import { DevEnvironmentAccessDetails } from "./devenvironmentaccessdetails";
/**
 * Success
 */
export declare class StartDevEnvironmentSessionResponse extends SpeakeasyBase {
    /**
     * Information about connection details for a Dev Environment.
     */
    accessDetails: DevEnvironmentAccessDetails;
    id: string;
    projectName: string;
    sessionId?: string;
    spaceName: string;
}

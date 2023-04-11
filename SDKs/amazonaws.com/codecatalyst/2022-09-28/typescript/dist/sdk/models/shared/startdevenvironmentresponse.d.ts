import { SpeakeasyBase } from "../../../internal/utils";
import { DevEnvironmentStatusEnum } from "./devenvironmentstatusenum";
/**
 * Success
 */
export declare class StartDevEnvironmentResponse extends SpeakeasyBase {
    id: string;
    projectName: string;
    spaceName: string;
    status: DevEnvironmentStatusEnum;
}

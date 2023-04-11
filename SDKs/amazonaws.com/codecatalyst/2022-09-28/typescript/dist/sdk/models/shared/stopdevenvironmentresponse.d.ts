import { SpeakeasyBase } from "../../../internal/utils";
import { DevEnvironmentStatusEnum } from "./devenvironmentstatusenum";
/**
 * Success
 */
export declare class StopDevEnvironmentResponse extends SpeakeasyBase {
    id: string;
    projectName: string;
    spaceName: string;
    status: DevEnvironmentStatusEnum;
}

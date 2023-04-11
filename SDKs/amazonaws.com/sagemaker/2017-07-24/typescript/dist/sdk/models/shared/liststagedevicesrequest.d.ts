import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListStageDevicesRequest extends SpeakeasyBase {
    edgeDeploymentPlanName: string;
    excludeDevicesDeployedInOtherStage?: boolean;
    maxResults?: number;
    nextToken?: string;
    stageName: string;
}

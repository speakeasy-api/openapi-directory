import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopWorkspacesXAmzTargetEnum {
    WorkspacesServiceStopWorkspaces = "WorkspacesService.StopWorkspaces"
}
export declare class StopWorkspacesRequest extends SpeakeasyBase {
    stopWorkspacesRequest: shared.StopWorkspacesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopWorkspacesXAmzTargetEnum;
}
export declare class StopWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stopWorkspacesResult?: shared.StopWorkspacesResult;
}

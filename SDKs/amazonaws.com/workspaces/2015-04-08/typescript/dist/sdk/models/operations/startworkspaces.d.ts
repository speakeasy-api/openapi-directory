import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartWorkspacesXAmzTargetEnum {
    WorkspacesServiceStartWorkspaces = "WorkspacesService.StartWorkspaces"
}
export declare class StartWorkspacesRequest extends SpeakeasyBase {
    startWorkspacesRequest: shared.StartWorkspacesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartWorkspacesXAmzTargetEnum;
}
export declare class StartWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    startWorkspacesResult?: shared.StartWorkspacesResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

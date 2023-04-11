import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TerminateWorkspacesXAmzTargetEnum {
    WorkspacesServiceTerminateWorkspaces = "WorkspacesService.TerminateWorkspaces"
}
export declare class TerminateWorkspacesRequest extends SpeakeasyBase {
    terminateWorkspacesRequest: shared.TerminateWorkspacesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TerminateWorkspacesXAmzTargetEnum;
}
export declare class TerminateWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    terminateWorkspacesResult?: shared.TerminateWorkspacesResult;
}

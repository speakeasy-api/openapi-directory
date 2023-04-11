import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RebootWorkspacesXAmzTargetEnum {
    WorkspacesServiceRebootWorkspaces = "WorkspacesService.RebootWorkspaces"
}
export declare class RebootWorkspacesRequest extends SpeakeasyBase {
    rebootWorkspacesRequest: shared.RebootWorkspacesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RebootWorkspacesXAmzTargetEnum;
}
export declare class RebootWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OperationNotSupportedException
     */
    operationNotSupportedException?: any;
    /**
     * Success
     */
    rebootWorkspacesResult?: shared.RebootWorkspacesResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RebuildWorkspacesXAmzTargetEnum {
    WorkspacesServiceRebuildWorkspaces = "WorkspacesService.RebuildWorkspaces"
}
export declare class RebuildWorkspacesRequest extends SpeakeasyBase {
    rebuildWorkspacesRequest: shared.RebuildWorkspacesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RebuildWorkspacesXAmzTargetEnum;
}
export declare class RebuildWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OperationNotSupportedException
     */
    operationNotSupportedException?: any;
    /**
     * Success
     */
    rebuildWorkspacesResult?: shared.RebuildWorkspacesResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

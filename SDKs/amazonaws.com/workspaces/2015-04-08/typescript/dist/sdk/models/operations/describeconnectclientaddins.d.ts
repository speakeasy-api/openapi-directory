import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeConnectClientAddInsXAmzTargetEnum {
    WorkspacesServiceDescribeConnectClientAddIns = "WorkspacesService.DescribeConnectClientAddIns"
}
export declare class DescribeConnectClientAddInsRequest extends SpeakeasyBase {
    describeConnectClientAddInsRequest: shared.DescribeConnectClientAddInsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConnectClientAddInsXAmzTargetEnum;
}
export declare class DescribeConnectClientAddInsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeConnectClientAddInsResult?: shared.DescribeConnectClientAddInsResult;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

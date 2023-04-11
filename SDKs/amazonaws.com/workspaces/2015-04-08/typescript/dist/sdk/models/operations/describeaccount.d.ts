import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAccountXAmzTargetEnum {
    WorkspacesServiceDescribeAccount = "WorkspacesService.DescribeAccount"
}
export declare class DescribeAccountRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAccountXAmzTargetEnum;
}
export declare class DescribeAccountResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeAccountResult?: shared.DescribeAccountResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

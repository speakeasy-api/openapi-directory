import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeClientBrandingXAmzTargetEnum {
    WorkspacesServiceDescribeClientBranding = "WorkspacesService.DescribeClientBranding"
}
export declare class DescribeClientBrandingRequest extends SpeakeasyBase {
    describeClientBrandingRequest: shared.DescribeClientBrandingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeClientBrandingXAmzTargetEnum;
}
export declare class DescribeClientBrandingResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeClientBrandingResult?: shared.DescribeClientBrandingResult;
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

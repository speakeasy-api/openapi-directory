import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeVpcPeeringAuthorizationsXAmzTargetEnum {
    GameLiftDescribeVpcPeeringAuthorizations = "GameLift.DescribeVpcPeeringAuthorizations"
}
export declare class DescribeVpcPeeringAuthorizationsRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeVpcPeeringAuthorizationsXAmzTargetEnum;
}
export declare class DescribeVpcPeeringAuthorizationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeVpcPeeringAuthorizationsOutput?: shared.DescribeVpcPeeringAuthorizationsOutput;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}

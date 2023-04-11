import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeVpcPeeringConnectionsXAmzTargetEnum {
    GameLiftDescribeVpcPeeringConnections = "GameLift.DescribeVpcPeeringConnections"
}
export declare class DescribeVpcPeeringConnectionsRequest extends SpeakeasyBase {
    describeVpcPeeringConnectionsInput: shared.DescribeVpcPeeringConnectionsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeVpcPeeringConnectionsXAmzTargetEnum;
}
export declare class DescribeVpcPeeringConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeVpcPeeringConnectionsOutput?: shared.DescribeVpcPeeringConnectionsOutput;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}

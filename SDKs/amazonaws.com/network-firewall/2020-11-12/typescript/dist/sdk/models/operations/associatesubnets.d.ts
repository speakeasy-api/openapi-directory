import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateSubnetsXAmzTargetEnum {
    NetworkFirewall20201112AssociateSubnets = "NetworkFirewall_20201112.AssociateSubnets"
}
export declare class AssociateSubnetsRequest extends SpeakeasyBase {
    associateSubnetsRequest: shared.AssociateSubnetsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateSubnetsXAmzTargetEnum;
}
export declare class AssociateSubnetsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateSubnetsResponse?: shared.AssociateSubnetsResponse;
    contentType: string;
    /**
     * InsufficientCapacityException
     */
    insufficientCapacityException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * InvalidTokenException
     */
    invalidTokenException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}

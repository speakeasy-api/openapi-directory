import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateVpcPeeringAuthorizationXAmzTargetEnum {
    GameLiftCreateVpcPeeringAuthorization = "GameLift.CreateVpcPeeringAuthorization"
}
export declare class CreateVpcPeeringAuthorizationRequest extends SpeakeasyBase {
    createVpcPeeringAuthorizationInput: shared.CreateVpcPeeringAuthorizationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateVpcPeeringAuthorizationXAmzTargetEnum;
}
export declare class CreateVpcPeeringAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createVpcPeeringAuthorizationOutput?: shared.CreateVpcPeeringAuthorizationOutput;
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

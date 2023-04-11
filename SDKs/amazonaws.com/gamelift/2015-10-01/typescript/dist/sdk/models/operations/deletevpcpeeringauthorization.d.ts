import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteVpcPeeringAuthorizationXAmzTargetEnum {
    GameLiftDeleteVpcPeeringAuthorization = "GameLift.DeleteVpcPeeringAuthorization"
}
export declare class DeleteVpcPeeringAuthorizationRequest extends SpeakeasyBase {
    deleteVpcPeeringAuthorizationInput: shared.DeleteVpcPeeringAuthorizationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteVpcPeeringAuthorizationXAmzTargetEnum;
}
export declare class DeleteVpcPeeringAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteVpcPeeringAuthorizationOutput?: Record<string, any>;
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

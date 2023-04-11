import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateVpcPeeringConnectionXAmzTargetEnum {
    GameLiftCreateVpcPeeringConnection = "GameLift.CreateVpcPeeringConnection"
}
export declare class CreateVpcPeeringConnectionRequest extends SpeakeasyBase {
    createVpcPeeringConnectionInput: shared.CreateVpcPeeringConnectionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateVpcPeeringConnectionXAmzTargetEnum;
}
export declare class CreateVpcPeeringConnectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createVpcPeeringConnectionOutput?: Record<string, any>;
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

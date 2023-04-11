import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteVpcPeeringConnectionXAmzTargetEnum {
    GameLiftDeleteVpcPeeringConnection = "GameLift.DeleteVpcPeeringConnection"
}
export declare class DeleteVpcPeeringConnectionRequest extends SpeakeasyBase {
    deleteVpcPeeringConnectionInput: shared.DeleteVpcPeeringConnectionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteVpcPeeringConnectionXAmzTargetEnum;
}
export declare class DeleteVpcPeeringConnectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteVpcPeeringConnectionOutput?: Record<string, any>;
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

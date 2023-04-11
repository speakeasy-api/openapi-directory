import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteLocationXAmzTargetEnum {
    GameLiftDeleteLocation = "GameLift.DeleteLocation"
}
export declare class DeleteLocationRequest extends SpeakeasyBase {
    deleteLocationInput: shared.DeleteLocationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLocationXAmzTargetEnum;
}
export declare class DeleteLocationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteLocationOutput?: Record<string, any>;
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

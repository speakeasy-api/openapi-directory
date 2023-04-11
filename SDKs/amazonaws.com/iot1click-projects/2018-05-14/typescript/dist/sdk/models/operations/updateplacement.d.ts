import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdatePlacementRequestBody extends SpeakeasyBase {
    /**
     * The user-defined object of attributes used to update the placement. The maximum number of key/value pairs is 50.
     */
    attributes?: Record<string, string>;
}
export declare class UpdatePlacementRequest extends SpeakeasyBase {
    requestBody: UpdatePlacementRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the placement to update.
     */
    placementName: string;
    /**
     * The name of the project containing the placement to be updated.
     */
    projectName: string;
}
export declare class UpdatePlacementResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * Success
     */
    updatePlacementResponse?: Record<string, any>;
}

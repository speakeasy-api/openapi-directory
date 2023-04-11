import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreatePlacementRequestBody extends SpeakeasyBase {
    /**
     * Optional user-defined key/value pairs providing contextual data (such as location or function) for the placement.
     */
    attributes?: Record<string, string>;
    /**
     * The name of the placement to be created.
     */
    placementName: string;
}
export declare class CreatePlacementRequest extends SpeakeasyBase {
    requestBody: CreatePlacementRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the project in which to create the placement.
     */
    projectName: string;
}
export declare class CreatePlacementResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createPlacementResponse?: Record<string, any>;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceConflictException
     */
    resourceConflictException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateWorkerFleetRequestBody extends SpeakeasyBase {
    /**
     * JSON blob containing additional fixed properties regarding the worker fleet
     */
    additionalFixedProperties?: string;
    /**
     * Full ARN of the worker fleet.
     */
    id: string;
    /**
     * Human friendly name of the resource.
     */
    name?: string;
}
export declare class UpdateWorkerFleetRequest extends SpeakeasyBase {
    requestBody: UpdateWorkerFleetRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateWorkerFleetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
    /**
     * Success
     */
    updateWorkerFleetResponse?: shared.UpdateWorkerFleetResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

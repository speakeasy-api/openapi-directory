import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOperationRequestBody extends SpeakeasyBase {
    /**
     * The ID of the operation.
     */
    operationId: string;
}
export declare class GetOperationRequest extends SpeakeasyBase {
    requestBody: GetOperationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetOperationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getOperationOutput?: shared.GetOperationOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

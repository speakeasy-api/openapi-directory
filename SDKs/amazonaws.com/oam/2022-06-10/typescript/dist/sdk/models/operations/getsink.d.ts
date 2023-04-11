import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSinkRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the sink to retrieve information for.
     */
    identifier: string;
}
export declare class GetSinkRequest extends SpeakeasyBase {
    requestBody: GetSinkRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSinkResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSinkOutput?: shared.GetSinkOutput;
    /**
     * InternalServiceFault
     */
    internalServiceFault?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * MissingRequiredParameterException
     */
    missingRequiredParameterException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

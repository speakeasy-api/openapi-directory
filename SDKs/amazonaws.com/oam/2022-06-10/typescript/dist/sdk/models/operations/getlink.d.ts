import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLinkRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the link to retrieve information for.
     */
    identifier: string;
}
export declare class GetLinkRequest extends SpeakeasyBase {
    requestBody: GetLinkRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLinkResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getLinkOutput?: shared.GetLinkOutput;
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

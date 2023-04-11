import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateLinkRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the link that you want to update.
     */
    identifier: string;
    /**
     * <p>An array of strings that define which types of data that the source account will send to the monitoring account.</p> <p>Your input here replaces the current set of data types that are shared.</p>
     */
    resourceTypes: shared.ResourceTypeEnum[];
}
export declare class UpdateLinkRequest extends SpeakeasyBase {
    requestBody: UpdateLinkRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateLinkResponse extends SpeakeasyBase {
    contentType: string;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateLinkOutput?: shared.UpdateLinkOutput;
}

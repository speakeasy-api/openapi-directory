import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateResourceProfileDetectionsRequestBody extends SpeakeasyBase {
    /**
     * An array of objects, one for each custom data identifier or managed data identifier that detected the type of sensitive data to start excluding or including in the bucket's score. To start including all sensitive data types in the score, don't specify any values for this array.
     */
    suppressDataIdentifiers?: shared.SuppressDataIdentifier[];
}
export declare class UpdateResourceProfileDetectionsRequest extends SpeakeasyBase {
    requestBody: UpdateResourceProfileDetectionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.
     */
    resourceArn: string;
}
export declare class UpdateResourceProfileDetectionsResponse extends SpeakeasyBase {
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
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateResourceProfileDetectionsResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}

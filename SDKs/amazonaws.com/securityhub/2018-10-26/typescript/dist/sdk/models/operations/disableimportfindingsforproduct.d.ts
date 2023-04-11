import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DisableImportFindingsForProductRequest extends SpeakeasyBase {
    /**
     * The ARN of the integrated product to disable the integration for.
     */
    productSubscriptionArn: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisableImportFindingsForProductResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disableImportFindingsForProductResponse?: Record<string, any>;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidAccessException
     */
    invalidAccessException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

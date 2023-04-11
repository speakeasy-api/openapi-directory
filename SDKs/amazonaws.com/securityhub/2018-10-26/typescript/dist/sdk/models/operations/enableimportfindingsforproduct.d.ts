import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnableImportFindingsForProductRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the product to enable the integration for.
     */
    productArn: string;
}
export declare class EnableImportFindingsForProductRequest extends SpeakeasyBase {
    requestBody: EnableImportFindingsForProductRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class EnableImportFindingsForProductResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    enableImportFindingsForProductResponse?: shared.EnableImportFindingsForProductResponse;
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
    /**
     * ResourceConflictException
     */
    resourceConflictException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

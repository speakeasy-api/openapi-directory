import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCaseRequestBody extends SpeakeasyBase {
    /**
     * An array of objects with <code>fieldId</code> (matching ListFields/DescribeField) and value union data, structured identical to <code>CreateCase</code>.
     */
    fields: shared.FieldValue[];
}
export declare class UpdateCaseRequest extends SpeakeasyBase {
    requestBody: UpdateCaseRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A unique identifier of the case.
     */
    caseId: string;
    /**
     * The unique identifier of the Cases domain.
     */
    domainId: string;
}
export declare class UpdateCaseResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateCaseResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchGetStandardsControlAssociationsRequestBody extends SpeakeasyBase {
    /**
     *  An array with one or more objects that includes a security control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) and the Amazon Resource Name (ARN) of a standard. This field is used to query the enablement status of a control in a specified standard. The security control ID or ARN is the same across standards.
     */
    standardsControlAssociationIds: shared.StandardsControlAssociationId[];
}
export declare class BatchGetStandardsControlAssociationsRequest extends SpeakeasyBase {
    requestBody: BatchGetStandardsControlAssociationsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchGetStandardsControlAssociationsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetStandardsControlAssociationsResponse?: shared.BatchGetStandardsControlAssociationsResponse;
    contentType: string;
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
}

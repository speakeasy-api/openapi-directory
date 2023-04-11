import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchUpdateStandardsControlAssociationsRequestBody extends SpeakeasyBase {
    /**
     *  Updates the enablement status of a security control in a specified standard.
     */
    standardsControlAssociationUpdates: shared.StandardsControlAssociationUpdate[];
}
export declare class BatchUpdateStandardsControlAssociationsRequest extends SpeakeasyBase {
    requestBody: BatchUpdateStandardsControlAssociationsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchUpdateStandardsControlAssociationsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchUpdateStandardsControlAssociationsResponse?: shared.BatchUpdateStandardsControlAssociationsResponse;
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

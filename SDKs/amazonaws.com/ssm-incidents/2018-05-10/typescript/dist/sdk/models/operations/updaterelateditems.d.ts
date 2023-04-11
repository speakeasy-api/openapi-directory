import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Details about the related item you're adding.
 */
export declare class UpdateRelatedItemsRequestBodyRelatedItemsUpdate extends SpeakeasyBase {
    itemToAdd?: shared.RelatedItem;
    itemToRemove?: shared.ItemIdentifier;
}
export declare class UpdateRelatedItemsRequestBody extends SpeakeasyBase {
    /**
     * A token that ensures that a client calls the operation only once with the specified details.
     */
    clientToken?: string;
    /**
     * The Amazon Resource Name (ARN) of the incident record that contains the related items that you update.
     */
    incidentRecordArn: string;
    /**
     * Details about the related item you're adding.
     */
    relatedItemsUpdate: UpdateRelatedItemsRequestBodyRelatedItemsUpdate;
}
export declare class UpdateRelatedItemsRequest extends SpeakeasyBase {
    requestBody: UpdateRelatedItemsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateRelatedItemsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateRelatedItemsOutput?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}

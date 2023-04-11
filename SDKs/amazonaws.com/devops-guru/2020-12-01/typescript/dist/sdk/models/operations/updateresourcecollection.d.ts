import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  Specifies if the resource collection in the request is added or deleted to the resource collection.
 */
export declare enum UpdateResourceCollectionRequestBodyActionEnum {
    Add = "ADD",
    Remove = "REMOVE"
}
/**
 *  Contains information used to update a collection of Amazon Web Services resources.
 */
export declare class UpdateResourceCollectionRequestBodyResourceCollection extends SpeakeasyBase {
    cloudFormation?: shared.UpdateCloudFormationCollectionFilter;
    tags?: shared.UpdateTagCollectionFilter[];
}
export declare class UpdateResourceCollectionRequestBody extends SpeakeasyBase {
    /**
     *  Specifies if the resource collection in the request is added or deleted to the resource collection.
     */
    action: UpdateResourceCollectionRequestBodyActionEnum;
    /**
     *  Contains information used to update a collection of Amazon Web Services resources.
     */
    resourceCollection: UpdateResourceCollectionRequestBodyResourceCollection;
}
export declare class UpdateResourceCollectionRequest extends SpeakeasyBase {
    requestBody: UpdateResourceCollectionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateResourceCollectionResponse extends SpeakeasyBase {
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateResourceCollectionResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}

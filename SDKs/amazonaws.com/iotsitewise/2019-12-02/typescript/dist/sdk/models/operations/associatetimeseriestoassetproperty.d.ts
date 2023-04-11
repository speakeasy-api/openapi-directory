import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AssociateTimeSeriesToAssetPropertyRequestBody extends SpeakeasyBase {
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: string;
}
export declare class AssociateTimeSeriesToAssetPropertyRequest extends SpeakeasyBase {
    requestBody: AssociateTimeSeriesToAssetPropertyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The alias that identifies the time series.
     */
    alias: string;
    /**
     * The ID of the asset in which the asset property was created.
     */
    assetId: string;
    /**
     * The ID of the asset property.
     */
    propertyId: string;
}
export declare class AssociateTimeSeriesToAssetPropertyResponse extends SpeakeasyBase {
    /**
     * ConflictingOperationException
     */
    conflictingOperationException?: any;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
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
}

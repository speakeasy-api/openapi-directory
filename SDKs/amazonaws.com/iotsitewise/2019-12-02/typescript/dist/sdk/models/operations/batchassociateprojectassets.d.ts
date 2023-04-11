import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchAssociateProjectAssetsRequestBody extends SpeakeasyBase {
    /**
     * The IDs of the assets to be associated to the project.
     */
    assetIds: string[];
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: string;
}
export declare class BatchAssociateProjectAssetsRequest extends SpeakeasyBase {
    requestBody: BatchAssociateProjectAssetsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the project to which to associate the assets.
     */
    projectId: string;
}
export declare class BatchAssociateProjectAssetsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchAssociateProjectAssetsResponse?: shared.BatchAssociateProjectAssetsResponse;
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
     * LimitExceededException
     */
    limitExceededException?: any;
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
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchDisassociateProjectAssetsRequestBody extends SpeakeasyBase {
    /**
     * The IDs of the assets to be disassociated from the project.
     */
    assetIds: string[];
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: string;
}
export declare class BatchDisassociateProjectAssetsRequest extends SpeakeasyBase {
    requestBody: BatchDisassociateProjectAssetsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the project from which to disassociate the assets.
     */
    projectId: string;
}
export declare class BatchDisassociateProjectAssetsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDisassociateProjectAssetsResponse?: shared.BatchDisassociateProjectAssetsResponse;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
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

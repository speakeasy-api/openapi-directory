import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAssetRequestBody extends SpeakeasyBase {
    /**
     * A description for the asset.
     */
    assetDescription?: string;
    /**
     * The ID of the asset model from which to create the asset.
     */
    assetModelId: string;
    /**
     * A friendly name for the asset.
     */
    assetName: string;
    /**
     * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
     */
    clientToken?: string;
    /**
     * A list of key-value pairs that contain metadata for the asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.
     */
    tags?: Record<string, string>;
}
export declare class CreateAssetRequest extends SpeakeasyBase {
    requestBody: CreateAssetRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAssetResponse extends SpeakeasyBase {
    /**
     * ConflictingOperationException
     */
    conflictingOperationException?: any;
    contentType: string;
    /**
     * Success
     */
    createAssetResponse?: shared.CreateAssetResponse;
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
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}

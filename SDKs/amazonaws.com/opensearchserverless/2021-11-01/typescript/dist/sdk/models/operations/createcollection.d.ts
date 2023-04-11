import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateCollectionXAmzTargetEnum {
    OpenSearchServerlessCreateCollection = "OpenSearchServerless.CreateCollection"
}
export declare class CreateCollectionRequest extends SpeakeasyBase {
    createCollectionRequest: shared.CreateCollectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCollectionXAmzTargetEnum;
}
export declare class CreateCollectionResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createCollectionResponse?: shared.CreateCollectionResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * OcuLimitExceededException
     */
    ocuLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

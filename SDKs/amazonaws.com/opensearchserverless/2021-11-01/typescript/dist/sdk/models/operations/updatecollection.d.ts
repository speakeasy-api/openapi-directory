import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateCollectionXAmzTargetEnum {
    OpenSearchServerlessUpdateCollection = "OpenSearchServerless.UpdateCollection"
}
export declare class UpdateCollectionRequest extends SpeakeasyBase {
    updateCollectionRequest: shared.UpdateCollectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCollectionXAmzTargetEnum;
}
export declare class UpdateCollectionResponse extends SpeakeasyBase {
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
     * Success
     */
    updateCollectionResponse?: shared.UpdateCollectionResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

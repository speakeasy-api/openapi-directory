import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateKeyDescriptionXAmzTargetEnum {
    TrentServiceUpdateKeyDescription = "TrentService.UpdateKeyDescription"
}
export declare class UpdateKeyDescriptionRequest extends SpeakeasyBase {
    updateKeyDescriptionRequest: shared.UpdateKeyDescriptionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateKeyDescriptionXAmzTargetEnum;
}
export declare class UpdateKeyDescriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DependencyTimeoutException
     */
    dependencyTimeoutException?: any;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * KMSInternalException
     */
    kmsInternalException?: any;
    /**
     * KMSInvalidStateException
     */
    kmsInvalidStateException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

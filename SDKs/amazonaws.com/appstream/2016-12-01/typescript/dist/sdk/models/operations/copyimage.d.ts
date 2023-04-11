import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CopyImageXAmzTargetEnum {
    PhotonAdminProxyServiceCopyImage = "PhotonAdminProxyService.CopyImage"
}
export declare class CopyImageRequest extends SpeakeasyBase {
    copyImageRequest: shared.CopyImageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CopyImageXAmzTargetEnum;
}
export declare class CopyImageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    copyImageResponse?: shared.CopyImageResponse;
    /**
     * IncompatibleImageException
     */
    incompatibleImageException?: any;
    /**
     * InvalidAccountStatusException
     */
    invalidAccountStatusException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ResourceNotAvailableException
     */
    resourceNotAvailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

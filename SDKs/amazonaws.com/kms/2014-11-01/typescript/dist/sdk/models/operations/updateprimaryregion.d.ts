import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdatePrimaryRegionXAmzTargetEnum {
    TrentServiceUpdatePrimaryRegion = "TrentService.UpdatePrimaryRegion"
}
export declare class UpdatePrimaryRegionRequest extends SpeakeasyBase {
    updatePrimaryRegionRequest: shared.UpdatePrimaryRegionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePrimaryRegionXAmzTargetEnum;
}
export declare class UpdatePrimaryRegionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DisabledException
     */
    disabledException?: any;
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
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}

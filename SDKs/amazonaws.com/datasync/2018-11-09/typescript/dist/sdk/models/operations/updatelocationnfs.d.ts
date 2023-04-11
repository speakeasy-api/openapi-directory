import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateLocationNfsXAmzTargetEnum {
    FmrsServiceUpdateLocationNfs = "FmrsService.UpdateLocationNfs"
}
export declare class UpdateLocationNfsRequest extends SpeakeasyBase {
    updateLocationNfsRequest: shared.UpdateLocationNfsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLocationNfsXAmzTargetEnum;
}
export declare class UpdateLocationNfsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateLocationNfsResponse?: Record<string, any>;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateTestGridUrlXAmzTargetEnum {
    DeviceFarm20150623CreateTestGridUrl = "DeviceFarm_20150623.CreateTestGridUrl"
}
export declare class CreateTestGridUrlRequest extends SpeakeasyBase {
    createTestGridUrlRequest: shared.CreateTestGridUrlRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTestGridUrlXAmzTargetEnum;
}
export declare class CreateTestGridUrlResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    createTestGridUrlResult?: shared.CreateTestGridUrlResult;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

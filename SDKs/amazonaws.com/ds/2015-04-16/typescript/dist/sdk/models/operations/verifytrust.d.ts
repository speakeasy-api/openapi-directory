import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum VerifyTrustXAmzTargetEnum {
    DirectoryService20150416VerifyTrust = "DirectoryService_20150416.VerifyTrust"
}
export declare class VerifyTrustRequest extends SpeakeasyBase {
    verifyTrustRequest: shared.VerifyTrustRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: VerifyTrustXAmzTargetEnum;
}
export declare class VerifyTrustResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * EntityDoesNotExistException
     */
    entityDoesNotExistException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
    /**
     * Success
     */
    verifyTrustResult?: shared.VerifyTrustResult;
}

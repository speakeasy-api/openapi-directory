import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum VerifyMacXAmzTargetEnum {
    TrentServiceVerifyMac = "TrentService.VerifyMac"
}
export declare class VerifyMacRequest extends SpeakeasyBase {
    verifyMacRequest: shared.VerifyMacRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: VerifyMacXAmzTargetEnum;
}
export declare class VerifyMacResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DisabledException
     */
    disabledException?: any;
    /**
     * InvalidGrantTokenException
     */
    invalidGrantTokenException?: any;
    /**
     * InvalidKeyUsageException
     */
    invalidKeyUsageException?: any;
    /**
     * KMSInternalException
     */
    kmsInternalException?: any;
    /**
     * KMSInvalidMacException
     */
    kmsInvalidMacException?: any;
    /**
     * KMSInvalidStateException
     */
    kmsInvalidStateException?: any;
    /**
     * KeyUnavailableException
     */
    keyUnavailableException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    verifyMacResponse?: shared.VerifyMacResponse;
}

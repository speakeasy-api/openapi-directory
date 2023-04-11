import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GenerateMacXAmzTargetEnum {
    TrentServiceGenerateMac = "TrentService.GenerateMac"
}
export declare class GenerateMacRequest extends SpeakeasyBase {
    generateMacRequest: shared.GenerateMacRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GenerateMacXAmzTargetEnum;
}
export declare class GenerateMacResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DisabledException
     */
    disabledException?: any;
    /**
     * Success
     */
    generateMacResponse?: shared.GenerateMacResponse;
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
}

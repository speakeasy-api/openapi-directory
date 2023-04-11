import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateCertificateOptionsXAmzTargetEnum {
    CertificateManagerUpdateCertificateOptions = "CertificateManager.UpdateCertificateOptions"
}
export declare class UpdateCertificateOptionsRequest extends SpeakeasyBase {
    updateCertificateOptionsRequest: shared.UpdateCertificateOptionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCertificateOptionsXAmzTargetEnum;
}
export declare class UpdateCertificateOptionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RevokeCertificateXAmzTargetEnum {
    ACMPrivateCARevokeCertificate = "ACMPrivateCA.RevokeCertificate"
}
export declare class RevokeCertificateRequest extends SpeakeasyBase {
    revokeCertificateRequest: shared.RevokeCertificateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RevokeCertificateXAmzTargetEnum;
}
export declare class RevokeCertificateResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * RequestAlreadyProcessedException
     */
    requestAlreadyProcessedException?: any;
    /**
     * RequestFailedException
     */
    requestFailedException?: any;
    /**
     * RequestInProgressException
     */
    requestInProgressException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

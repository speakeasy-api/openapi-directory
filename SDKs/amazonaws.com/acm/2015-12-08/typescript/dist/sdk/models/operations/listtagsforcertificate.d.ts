import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTagsForCertificateXAmzTargetEnum {
    CertificateManagerListTagsForCertificate = "CertificateManager.ListTagsForCertificate"
}
export declare class ListTagsForCertificateRequest extends SpeakeasyBase {
    listTagsForCertificateRequest: shared.ListTagsForCertificateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsForCertificateXAmzTargetEnum;
}
export declare class ListTagsForCertificateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * Success
     */
    listTagsForCertificateResponse?: shared.ListTagsForCertificateResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteCertificateXAmzTargetEnum {
    AmazonDMSv20160101DeleteCertificate = "AmazonDMSv20160101.DeleteCertificate"
}
export declare class DeleteCertificateRequest extends SpeakeasyBase {
    deleteCertificateMessage: shared.DeleteCertificateMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCertificateXAmzTargetEnum;
}
export declare class DeleteCertificateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteCertificateResponse?: shared.DeleteCertificateResponse;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

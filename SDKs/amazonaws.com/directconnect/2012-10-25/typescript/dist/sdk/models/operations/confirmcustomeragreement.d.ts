import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ConfirmCustomerAgreementXAmzTargetEnum {
    OvertureServiceConfirmCustomerAgreement = "OvertureService.ConfirmCustomerAgreement"
}
export declare class ConfirmCustomerAgreementRequest extends SpeakeasyBase {
    confirmCustomerAgreementRequest: shared.ConfirmCustomerAgreementRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ConfirmCustomerAgreementXAmzTargetEnum;
}
export declare class ConfirmCustomerAgreementResponse extends SpeakeasyBase {
    /**
     * Success
     */
    confirmCustomerAgreementResponse?: shared.ConfirmCustomerAgreementResponse;
    contentType: string;
    /**
     * DirectConnectClientException
     */
    directConnectClientException?: any;
    /**
     * DirectConnectServerException
     */
    directConnectServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

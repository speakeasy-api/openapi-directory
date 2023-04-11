import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AcknowledgeOrderReceiptRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the order.
     */
    orderArn: string;
}
export declare class AcknowledgeOrderReceiptRequest extends SpeakeasyBase {
    requestBody: AcknowledgeOrderReceiptRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AcknowledgeOrderReceiptResponse extends SpeakeasyBase {
    /**
     * Success
     */
    acknowledgeOrderReceiptResponse?: shared.AcknowledgeOrderReceiptResponse;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

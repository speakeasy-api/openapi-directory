import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteTargetRequestBody extends SpeakeasyBase {
    /**
     * A Boolean value that can be used to delete all associations with this Chatbot topic. The default value is FALSE. If set to TRUE, all associations between that target and every notification rule in your Amazon Web Services account are deleted.
     */
    forceUnsubscribeAll?: boolean;
    /**
     * The Amazon Resource Name (ARN) of the Chatbot topic or Chatbot client to delete.
     */
    targetAddress: string;
}
export declare class DeleteTargetRequest extends SpeakeasyBase {
    requestBody: DeleteTargetRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteTargetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteTargetResult?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

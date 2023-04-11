import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteNamespaceXAmzTargetEnum {
    IotThingsGraphFrontEndServiceDeleteNamespace = "IotThingsGraphFrontEndService.DeleteNamespace"
}
export declare class DeleteNamespaceRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteNamespaceXAmzTargetEnum;
}
export declare class DeleteNamespaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteNamespaceResponse?: shared.DeleteNamespaceResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}

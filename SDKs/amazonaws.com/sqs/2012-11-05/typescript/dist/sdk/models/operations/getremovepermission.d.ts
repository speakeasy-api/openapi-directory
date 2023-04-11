import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRemovePermissionActionEnum {
    RemovePermission = "RemovePermission"
}
export declare enum GETRemovePermissionVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GETRemovePermissionRequest extends SpeakeasyBase {
    /**
     * The AWS account number
     */
    accountNumber: number;
    action: GETRemovePermissionActionEnum;
    /**
     * The identification of the permission to remove. This is the label added using the <code> <a>AddPermission</a> </code> action.
     */
    label: string;
    /**
     * The name of the queue
     */
    queueName: string;
    version: GETRemovePermissionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRemovePermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

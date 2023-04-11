import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateStackInstancesActionEnum {
    CreateStackInstances = "CreateStackInstances"
}
export declare enum POSTCreateStackInstancesVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTCreateStackInstancesRequest extends SpeakeasyBase {
    action: POSTCreateStackInstancesActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateStackInstancesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateStackInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

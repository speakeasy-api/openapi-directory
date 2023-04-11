import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateManagedPrefixListActionEnum {
    CreateManagedPrefixList = "CreateManagedPrefixList"
}
export declare enum POSTCreateManagedPrefixListVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateManagedPrefixListRequest extends SpeakeasyBase {
    action: POSTCreateManagedPrefixListActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateManagedPrefixListVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateManagedPrefixListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

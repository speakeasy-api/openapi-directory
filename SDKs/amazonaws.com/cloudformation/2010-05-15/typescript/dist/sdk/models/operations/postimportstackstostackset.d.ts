import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTImportStacksToStackSetActionEnum {
    ImportStacksToStackSet = "ImportStacksToStackSet"
}
export declare enum POSTImportStacksToStackSetVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTImportStacksToStackSetRequest extends SpeakeasyBase {
    action: POSTImportStacksToStackSetActionEnum;
    requestBody?: Uint8Array;
    version: POSTImportStacksToStackSetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTImportStacksToStackSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

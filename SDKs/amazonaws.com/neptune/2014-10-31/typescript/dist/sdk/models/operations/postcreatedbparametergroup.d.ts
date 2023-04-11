import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateDBParameterGroupActionEnum {
    CreateDBParameterGroup = "CreateDBParameterGroup"
}
export declare enum POSTCreateDBParameterGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTCreateDBParameterGroupRequest extends SpeakeasyBase {
    action: POSTCreateDBParameterGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateDBParameterGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateDBParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

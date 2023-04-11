import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateDBParameterGroupActionEnum {
    CreateDBParameterGroup = "CreateDBParameterGroup"
}
export declare enum GETCreateDBParameterGroupVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GETCreateDBParameterGroupRequest extends SpeakeasyBase {
    action: GETCreateDBParameterGroupActionEnum;
    dbParameterGroupFamily: string;
    dbParameterGroupName: string;
    description: string;
    version: GETCreateDBParameterGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateDBParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

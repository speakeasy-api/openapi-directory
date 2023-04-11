import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteDBParameterGroupActionEnum {
    DeleteDBParameterGroup = "DeleteDBParameterGroup"
}
export declare enum GETDeleteDBParameterGroupVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GETDeleteDBParameterGroupRequest extends SpeakeasyBase {
    action: GETDeleteDBParameterGroupActionEnum;
    dbParameterGroupName: string;
    version: GETDeleteDBParameterGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteDBParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

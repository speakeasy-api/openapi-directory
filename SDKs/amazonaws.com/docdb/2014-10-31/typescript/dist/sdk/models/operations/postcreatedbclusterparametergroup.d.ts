import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateDBClusterParameterGroupActionEnum {
    CreateDBClusterParameterGroup = "CreateDBClusterParameterGroup"
}
export declare enum POSTCreateDBClusterParameterGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTCreateDBClusterParameterGroupRequest extends SpeakeasyBase {
    action: POSTCreateDBClusterParameterGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateDBClusterParameterGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateDBClusterParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

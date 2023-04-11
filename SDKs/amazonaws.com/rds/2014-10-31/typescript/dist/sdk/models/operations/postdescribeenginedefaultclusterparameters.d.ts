import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeEngineDefaultClusterParametersActionEnum {
    DescribeEngineDefaultClusterParameters = "DescribeEngineDefaultClusterParameters"
}
export declare enum POSTDescribeEngineDefaultClusterParametersVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTDescribeEngineDefaultClusterParametersRequest extends SpeakeasyBase {
    action: POSTDescribeEngineDefaultClusterParametersActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeEngineDefaultClusterParametersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeEngineDefaultClusterParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

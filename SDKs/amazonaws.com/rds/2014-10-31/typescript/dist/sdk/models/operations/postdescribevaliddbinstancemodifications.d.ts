import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeValidDBInstanceModificationsActionEnum {
    DescribeValidDBInstanceModifications = "DescribeValidDBInstanceModifications"
}
export declare enum POSTDescribeValidDBInstanceModificationsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTDescribeValidDBInstanceModificationsRequest extends SpeakeasyBase {
    action: POSTDescribeValidDBInstanceModificationsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeValidDBInstanceModificationsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeValidDBInstanceModificationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

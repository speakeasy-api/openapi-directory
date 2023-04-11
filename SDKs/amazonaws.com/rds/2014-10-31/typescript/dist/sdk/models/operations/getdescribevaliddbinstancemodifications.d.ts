import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeValidDBInstanceModificationsActionEnum {
    DescribeValidDBInstanceModifications = "DescribeValidDBInstanceModifications"
}
export declare enum GETDescribeValidDBInstanceModificationsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETDescribeValidDBInstanceModificationsRequest extends SpeakeasyBase {
    action: GETDescribeValidDBInstanceModificationsActionEnum;
    /**
     * The customer identifier or the ARN of your DB instance.
     */
    dbInstanceIdentifier: string;
    version: GETDescribeValidDBInstanceModificationsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeValidDBInstanceModificationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

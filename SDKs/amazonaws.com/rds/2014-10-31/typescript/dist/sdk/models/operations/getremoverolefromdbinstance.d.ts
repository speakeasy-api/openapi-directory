import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRemoveRoleFromDBInstanceActionEnum {
    RemoveRoleFromDBInstance = "RemoveRoleFromDBInstance"
}
export declare enum GETRemoveRoleFromDBInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETRemoveRoleFromDBInstanceRequest extends SpeakeasyBase {
    action: GETRemoveRoleFromDBInstanceActionEnum;
    /**
     * The name of the DB instance to disassociate the IAM role from.
     */
    dbInstanceIdentifier: string;
    /**
     * The name of the feature for the DB instance that the IAM role is to be disassociated from. For information about supported feature names, see <code>DBEngineVersion</code>.
     */
    featureName: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB instance, for example, <code>arn:aws:iam::123456789012:role/AccessRole</code>.
     */
    roleArn: string;
    version: GETRemoveRoleFromDBInstanceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRemoveRoleFromDBInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

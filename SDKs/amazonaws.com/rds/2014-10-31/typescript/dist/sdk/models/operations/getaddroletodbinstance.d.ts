import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAddRoleToDBInstanceActionEnum {
    AddRoleToDBInstance = "AddRoleToDBInstance"
}
export declare enum GETAddRoleToDBInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETAddRoleToDBInstanceRequest extends SpeakeasyBase {
    action: GETAddRoleToDBInstanceActionEnum;
    /**
     * The name of the DB instance to associate the IAM role with.
     */
    dbInstanceIdentifier: string;
    /**
     * The name of the feature for the DB instance that the IAM role is to be associated with. For information about supported feature names, see <a>DBEngineVersion</a>.
     */
    featureName: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role to associate with the DB instance, for example <code>arn:aws:iam::123456789012:role/AccessRole</code>.
     */
    roleArn: string;
    version: GETAddRoleToDBInstanceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAddRoleToDBInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

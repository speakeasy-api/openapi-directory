import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRebootDBInstanceActionEnum {
    RebootDBInstance = "RebootDBInstance"
}
export declare enum GETRebootDBInstanceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETRebootDBInstanceRequest extends SpeakeasyBase {
    action: GETRebootDBInstanceActionEnum;
    /**
     * <p>The DB instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identifier of an existing DBInstance.</p> </li> </ul>
     */
    dbInstanceIdentifier: string;
    /**
     * <p>A value that indicates whether the reboot is conducted through a Multi-AZ failover.</p> <p>Constraint: You can't enable force failover if the instance isn't configured for Multi-AZ.</p>
     */
    forceFailover?: boolean;
    version: GETRebootDBInstanceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRebootDBInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

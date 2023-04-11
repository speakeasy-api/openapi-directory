import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETSwitchoverReadReplicaActionEnum {
    SwitchoverReadReplica = "SwitchoverReadReplica"
}
export declare enum GETSwitchoverReadReplicaVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETSwitchoverReadReplicaRequest extends SpeakeasyBase {
    action: GETSwitchoverReadReplicaActionEnum;
    /**
     * <p>The DB instance identifier of the current standby database. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must match the identiﬁer of an existing Oracle read replica DB instance.</p> </li> </ul>
     */
    dbInstanceIdentifier: string;
    version: GETSwitchoverReadReplicaVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETSwitchoverReadReplicaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

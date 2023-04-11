import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyDBSubnetGroupActionEnum {
    ModifyDBSubnetGroup = "ModifyDBSubnetGroup"
}
export declare enum GETModifyDBSubnetGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETModifyDBSubnetGroupRequest extends SpeakeasyBase {
    action: GETModifyDBSubnetGroupActionEnum;
    /**
     * The description for the subnet group.
     */
    dbSubnetGroupDescription?: string;
    /**
     * <p>The name for the subnet group. This value is stored as a lowercase string. You can't modify the default subnet group. </p> <p>Constraints: Must match the name of an existing <code>DBSubnetGroup</code>. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>
     */
    dbSubnetGroupName: string;
    /**
     * The Amazon EC2 subnet IDs for the subnet group.
     */
    subnetIds: string[];
    version: GETModifyDBSubnetGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyDBSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

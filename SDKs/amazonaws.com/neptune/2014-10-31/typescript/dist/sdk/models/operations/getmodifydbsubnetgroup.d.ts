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
     * The description for the DB subnet group.
     */
    dbSubnetGroupDescription?: string;
    /**
     * <p>The name for the DB subnet group. This value is stored as a lowercase string. You can't modify the default subnet group.</p> <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p> <p>Example: <code>mySubnetgroup</code> </p>
     */
    dbSubnetGroupName: string;
    /**
     * The EC2 subnet IDs for the DB subnet group.
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

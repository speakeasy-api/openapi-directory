import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteDBSecurityGroupActionEnum {
    DeleteDBSecurityGroup = "DeleteDBSecurityGroup"
}
export declare enum GETDeleteDBSecurityGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETDeleteDBSecurityGroupRequest extends SpeakeasyBase {
    action: GETDeleteDBSecurityGroupActionEnum;
    /**
     * <p>The name of the DB security group to delete.</p> <note> <p>You can't delete the default DB security group.</p> </note> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> <li> <p>Must not be "Default"</p> </li> </ul>
     */
    dbSecurityGroupName: string;
    version: GETDeleteDBSecurityGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteDBSecurityGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

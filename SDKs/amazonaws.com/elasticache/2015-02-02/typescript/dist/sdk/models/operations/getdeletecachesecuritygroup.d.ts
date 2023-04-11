import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteCacheSecurityGroupActionEnum {
    DeleteCacheSecurityGroup = "DeleteCacheSecurityGroup"
}
export declare enum GETDeleteCacheSecurityGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETDeleteCacheSecurityGroupRequest extends SpeakeasyBase {
    action: GETDeleteCacheSecurityGroupActionEnum;
    /**
     * <p>The name of the cache security group to delete.</p> <note> <p>You cannot delete the default security group.</p> </note>
     */
    cacheSecurityGroupName: string;
    version: GETDeleteCacheSecurityGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteCacheSecurityGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

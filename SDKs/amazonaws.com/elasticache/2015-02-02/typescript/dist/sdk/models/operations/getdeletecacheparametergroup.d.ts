import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteCacheParameterGroupActionEnum {
    DeleteCacheParameterGroup = "DeleteCacheParameterGroup"
}
export declare enum GETDeleteCacheParameterGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETDeleteCacheParameterGroupRequest extends SpeakeasyBase {
    action: GETDeleteCacheParameterGroupActionEnum;
    /**
     * <p>The name of the cache parameter group to delete.</p> <note> <p>The specified cache security group must not be associated with any clusters.</p> </note>
     */
    cacheParameterGroupName: string;
    version: GETDeleteCacheParameterGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteCacheParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

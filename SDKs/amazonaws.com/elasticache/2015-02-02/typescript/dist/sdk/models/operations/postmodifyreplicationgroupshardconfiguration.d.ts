import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyReplicationGroupShardConfigurationActionEnum {
    ModifyReplicationGroupShardConfiguration = "ModifyReplicationGroupShardConfiguration"
}
export declare enum POSTModifyReplicationGroupShardConfigurationVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class POSTModifyReplicationGroupShardConfigurationRequest extends SpeakeasyBase {
    action: POSTModifyReplicationGroupShardConfigurationActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyReplicationGroupShardConfigurationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyReplicationGroupShardConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETApplyEnvironmentManagedActionActionEnum {
    ApplyEnvironmentManagedAction = "ApplyEnvironmentManagedAction"
}
export declare enum GETApplyEnvironmentManagedActionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETApplyEnvironmentManagedActionRequest extends SpeakeasyBase {
    action: GETApplyEnvironmentManagedActionActionEnum;
    /**
     * The action ID of the scheduled managed action to execute.
     */
    actionId: string;
    /**
     * The environment ID of the target environment.
     */
    environmentId?: string;
    /**
     * The name of the target environment.
     */
    environmentName?: string;
    version: GETApplyEnvironmentManagedActionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETApplyEnvironmentManagedActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeEnvironmentManagedActionsActionEnum {
    DescribeEnvironmentManagedActions = "DescribeEnvironmentManagedActions"
}
/**
 * To show only actions with a particular status, specify a status.
 */
export declare enum GETDescribeEnvironmentManagedActionsStatusEnum {
    Scheduled = "Scheduled",
    Pending = "Pending",
    Running = "Running",
    Unknown = "Unknown"
}
export declare enum GETDescribeEnvironmentManagedActionsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETDescribeEnvironmentManagedActionsRequest extends SpeakeasyBase {
    action: GETDescribeEnvironmentManagedActionsActionEnum;
    /**
     * The environment ID of the target environment.
     */
    environmentId?: string;
    /**
     * The name of the target environment.
     */
    environmentName?: string;
    /**
     * To show only actions with a particular status, specify a status.
     */
    status?: GETDescribeEnvironmentManagedActionsStatusEnum;
    version: GETDescribeEnvironmentManagedActionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeEnvironmentManagedActionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

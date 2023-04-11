import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GETDescribeEnvironmentHealthActionEnum {
    DescribeEnvironmentHealth = "DescribeEnvironmentHealth"
}
export declare enum GETDescribeEnvironmentHealthVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETDescribeEnvironmentHealthRequest extends SpeakeasyBase {
    action: GETDescribeEnvironmentHealthActionEnum;
    /**
     * Specify the response elements to return. To retrieve all attributes, set to <code>All</code>. If no attribute names are specified, returns the name of the environment.
     */
    attributeNames?: shared.EnvironmentHealthAttributeEnum[];
    /**
     * <p>Specify the environment by ID.</p> <p>You must specify either this or an EnvironmentName, or both.</p>
     */
    environmentId?: string;
    /**
     * <p>Specify the environment by name.</p> <p>You must specify either this or an EnvironmentName, or both.</p>
     */
    environmentName?: string;
    version: GETDescribeEnvironmentHealthVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeEnvironmentHealthResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

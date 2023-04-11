import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUpdateApplicationActionEnum {
    UpdateApplication = "UpdateApplication"
}
export declare enum GETUpdateApplicationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETUpdateApplicationRequest extends SpeakeasyBase {
    action: GETUpdateApplicationActionEnum;
    /**
     * The name of the application to update. If no such application is found, <code>UpdateApplication</code> returns an <code>InvalidParameterValue</code> error.
     */
    applicationName: string;
    /**
     * <p>A new description for the application.</p> <p>Default: If not specified, AWS Elastic Beanstalk does not update the description.</p>
     */
    description?: string;
    version: GETUpdateApplicationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUpdateApplicationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
